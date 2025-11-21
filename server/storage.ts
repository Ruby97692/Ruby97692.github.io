import { type Note, type InsertNote } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Note methods
  getNote(id: string): Promise<Note | undefined>;
  getAllNotes(): Promise<Note[]>;
  getNotesByCategory(category: string): Promise<Note[]>;
  searchNotes(query: string): Promise<Note[]>;
  createNote(note: InsertNote): Promise<Note>;
}

export class MemStorage implements IStorage {
  private notes: Map<string, Note>;

  constructor() {
    this.notes = new Map();
    this.seedData();
  }

  private seedData() {
    const sampleNotes: InsertNote[] = [
      {
        title: "微積分基礎 - 極限與連續",
        content: `## 極限的定義

極限是微積分中最基本也最重要的概念之一。它描述了當自變數接近某個值時，函數值的趨勢。

### 數學定義

對於函數 f(x)，當 x 趨近於 a 時，如果 f(x) 趨近於 L，我們說：

\`\`\`
lim(x→a) f(x) = L
\`\`\`

### 重要性質

1. **唯一性**：如果極限存在，則極限值是唯一的
2. **局部性**：極限值只與 a 附近的函數值有關
3. **保號性**：如果極限 > 0，則在 a 的某個鄰域內 f(x) > 0

## 連續性

連續性建立在極限的基礎上。函數 f(x) 在點 a 處連續，需要滿足三個條件：

1. f(a) 存在
2. lim(x→a) f(x) 存在
3. lim(x→a) f(x) = f(a)`,
        subject: "高等數學",
        category: "數學",
      },
      {
        title: "牛頓運動定律詳解",
        content: `## 牛頓三大運動定律

### 第一運動定律（慣性定律）

物體在不受外力或所受合力為零時，將保持靜止或等速直線運動的狀態。

### 第二運動定律

F = ma，力等於質量乘以加速度。這個定律建立了力、質量和加速度之間的定量關係。

### 第三運動定律

作用力與反作用力大小相等、方向相反，且作用在不同物體上。`,
        subject: "古典力學",
        category: "物理",
      },
      {
        title: "有機化學：碳氫化合物",
        content: `## 碳氫化合物分類

### 烷烴（Alkanes）

飽和碳氫化合物，通式 CnH2n+2。只含有碳碳單鍵和碳氫單鍵。

### 烯烴（Alkenes）

含有碳碳雙鍵的不飽和碳氫化合物，通式 CnH2n。

### 炔烴（Alkynes）

含有碳碳三鍵的不飽和碳氫化合物，通式 CnH2n-2。`,
        subject: "有機化學",
        category: "化學",
      },
      {
        title: "細胞結構與功能",
        content: `## 真核細胞的主要胞器

### 細胞核

含有遺傳物質 DNA，是細胞的控制中心。

### 粒線體

細胞的能量工廠，進行有氧呼吸產生 ATP。

### 內質網

分為粗糙內質網（附著核糖體）和平滑內質網，負責蛋白質和脂質的合成。`,
        subject: "細胞生物學",
        category: "生物",
      },
      {
        title: "資料結構：陣列與鏈結串列",
        content: `## 陣列（Array）

### 優點
- 隨機存取：O(1) 時間複雜度
- 記憶體連續，快取友善

### 缺點
- 插入刪除：O(n) 時間複雜度
- 大小固定（靜態陣列）

## 鏈結串列（Linked List）

### 優點
- 插入刪除：O(1) 時間複雜度（已知位置）
- 動態大小

### 缺點
- 隨機存取：O(n) 時間複雜度
- 額外的指標記憶體開銷`,
        subject: "資料結構",
        category: "程式設計",
      },
      {
        title: "莎士比亞悲劇賞析",
        content: `## 四大悲劇

### 哈姆雷特（Hamlet）

探討復仇、猶豫與人性的複雜性。"生存還是毀滅，這是個問題。"

### 馬克白（Macbeth）

野心、權力欲望與道德墮落的故事。

### 李爾王（King Lear）

權力、家庭與人性弱點的深刻剖析。

### 奧賽羅（Othello）

嫉妒、信任與操縱的悲劇。`,
        subject: "英國文學",
        category: "文學",
      },
      {
        title: "世界史：工業革命",
        content: `## 工業革命的起源

18 世紀中葉起源於英國，是人類歷史上的重大轉折點。

### 關鍵發明

- 蒸汽機：瓦特改良
- 紡織機：提高生產效率
- 鐵路：改變運輸方式

### 社會影響

城市化加速、工人階級興起、資本主義發展。`,
        subject: "近代史",
        category: "歷史",
      },
      {
        title: "英文文法：時態系統",
        content: `## 英文十二時態

### 現在式系統
- Simple Present：習慣、真理
- Present Continuous：進行中
- Present Perfect：已完成、影響現在
- Present Perfect Continuous：持續到現在

### 過去式系統
- Simple Past：過去完成的動作
- Past Continuous：過去進行中
- Past Perfect：過去的過去
- Past Perfect Continuous：過去持續動作

### 未來式系統
- Simple Future：將要發生
- Future Continuous：未來進行中
- Future Perfect：未來完成
- Future Perfect Continuous：未來持續`,
        subject: "英文文法",
        category: "英文",
      },
    ];

    sampleNotes.forEach((note) => {
      const id = randomUUID();
      const fullNote: Note = {
        ...note,
        id,
        date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
      };
      this.notes.set(id, fullNote);
    });
  }

  async getNote(id: string): Promise<Note | undefined> {
    return this.notes.get(id);
  }

  async getAllNotes(): Promise<Note[]> {
    return Array.from(this.notes.values()).sort(
      (a, b) => b.date.getTime() - a.date.getTime()
    );
  }

  async getNotesByCategory(category: string): Promise<Note[]> {
    return Array.from(this.notes.values())
      .filter((note) => note.category === category)
      .sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  async searchNotes(query: string): Promise<Note[]> {
    const lowerQuery = query.toLowerCase();
    return Array.from(this.notes.values())
      .filter(
        (note) =>
          note.title.toLowerCase().includes(lowerQuery) ||
          note.content.toLowerCase().includes(lowerQuery) ||
          note.subject.toLowerCase().includes(lowerQuery) ||
          note.category.toLowerCase().includes(lowerQuery)
      )
      .sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  async createNote(insertNote: InsertNote): Promise<Note> {
    const id = randomUUID();
    const note: Note = {
      ...insertNote,
      id,
      date: new Date(),
    };
    this.notes.set(id, note);
    return note;
  }
}

export const storage = new MemStorage();
