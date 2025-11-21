import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import type { Note } from "@shared/schema";
import StarField from "@/components/StarField";
import Header from "@/components/Header";
import NoteCard from "@/components/NoteCard";
import SearchBar from "@/components/SearchBar";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function NotesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [location]);

  const { data: allNotes, isLoading } = useQuery<Note[]>({
    queryKey: searchQuery ? ["/api/notes/search", searchQuery] : ["/api/notes"],
    queryFn: async ({ queryKey }) => {
      const [path, query] = queryKey;
      const url = query ? `${path}?q=${encodeURIComponent(query as string)}` : path;
      const res = await fetch(url as string, { credentials: "include" });
      if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
      return await res.json();
    },
  });

  const categories = ["all", ...Array.from(new Set(allNotes?.map((note) => note.category) || []))];

  const filteredNotes =
    selectedCategory === "all"
      ? allNotes
      : allNotes?.filter((note) => note.category === selectedCategory);
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "all") {
      setLocation("/notes");
    } else {
      setLocation(`/notes?category=${category}`);
    }
  };

  return (
    <div className="min-h-screen relative">
      <StarField />
      <div className="relative z-10">
        <Header />

        <section className="py-16 relative z-10">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center gap-8 mb-12">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-3" data-testid="text-all-notes-title">
                  所有筆記
                </h1>
                <p className="text-muted-foreground" data-testid="text-all-notes-subtitle">
                  {filteredNotes ? `共 ${filteredNotes.length} 篇筆記` : "載入中..."}
                </p>
              </div>

              <SearchBar onSearch={setSearchQuery} />

              <Tabs
                value={selectedCategory}
                onValueChange={handleCategoryChange}
                className="w-full max-w-4xl"
              >
                <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2 h-auto p-2 bg-card/60 backdrop-blur-sm">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      data-testid={`tab-category-${category}`}
                    >
                      {category === "all" ? "全部" : category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="space-y-4">
                    <Skeleton className="h-48 w-full" />
                  </div>
                ))}
              </div>
            ) : filteredNotes && filteredNotes.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  {searchQuery ? "找不到相關筆記" : "此分類尚無筆記"}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNotes?.map((note) => (
                  <NoteCard
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    preview={note.content.substring(0, 150) + "..."}
                    subject={note.subject}
                    category={note.category}
                    date={new Date(note.date)}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        <footer className="relative z-10 border-t border-border/40 backdrop-blur-sm bg-background/80 py-8 mt-12">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm text-muted-foreground">© 2024 星空筆記 · 用心記錄每一刻學習</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
