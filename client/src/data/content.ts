import type { Note } from "@/types/note";
import contentData from "./content.json";

interface ContentData {
  notes: Note[];
}

const content = contentData as ContentData;

export const notes: Note[] = content.notes;

