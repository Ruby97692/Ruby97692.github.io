export interface Note {
  id: string;
  slug: string;
  title: string;
  content: string;
  subject: string;
  category: string;
  date: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface InsertNote {
  title: string;
  content: string;
  subject: string;
  category: string;
}

export const insertNoteSchema = {
  parse: (data: InsertNote) => data,
};

