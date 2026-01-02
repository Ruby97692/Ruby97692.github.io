import { readdir, readFile, writeFile, stat } from "fs/promises";
import { resolve } from "path";
import yaml from "js-yaml";

interface ContentData {
  notes: any[];
}

async function generateContent() {
  const contentPath = resolve(process.cwd(), "content");
  const outputPath = resolve(process.cwd(), "client", "src", "data", "content.json");
  const data: ContentData = {
    notes: [],
  };

  // Load notes
  try {
    const notesDir = resolve(contentPath, "notes");
    const noteFiles = await readdir(notesDir);
    for (const file of noteFiles) {
      if (file.endsWith(".yaml") || file.endsWith(".yml")) {
        const filePath = resolve(notesDir, file);
        const fileStat = await stat(filePath);
        if (fileStat.isFile()) {
          const content = await readFile(filePath, "utf-8");
          const note = yaml.load(content) as any;
          const slug = file.replace(/\.(yaml|yml)$/, "");
          note.slug = slug;
          data.notes.push(note);
        }
      }
    }
    // Sort by date descending
    data.notes.sort((a, b) => {
      try {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      } catch {
        return 0;
      }
    });
  } catch (error) {
    console.warn("Failed to load notes:", error);
  }

  // Write to JSON file
  await writeFile(outputPath, JSON.stringify(data, null, 2), "utf-8");
  console.log(`Content generated successfully: ${outputPath}`);
  console.log(`  - Notes: ${data.notes.length}`);
}

generateContent().catch(console.error);

