import { useState, useMemo } from "react";
import { Link } from "wouter";
import type { Note } from "@/types/note";
import { notes } from "@/data/content";
import StarField from "@/components/StarField";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NoteCard from "@/components/NoteCard";
import CategorySection from "@/components/CategorySection";
import AboutSection from "@/components/AboutSection";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNotes = useMemo(() => {
    if (!searchQuery.trim()) return notes;
    const query = searchQuery.toLowerCase();
    return notes.filter(
      (note) =>
        note.title.toLowerCase().includes(query) ||
        note.content.toLowerCase().includes(query) ||
        note.subject.toLowerCase().includes(query) ||
        note.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const displayedNotes = filteredNotes.slice(0, 6);
  const isLoading = false;

  return (
    <div className="min-h-screen relative">
      <StarField />
      <div className="relative z-10">
        <Header />
        <HeroSection />

        <section id="notes-section" className="py-16 relative z-10">
          <div className="container mx-auto px-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2" data-testid="text-featured-notes-title">
                  {searchQuery ? "搜尋結果" : "精選筆記"}
                </h2>
                <p className="text-muted-foreground" data-testid="text-featured-notes-subtitle">
                  {searchQuery ? `找到 ${filteredNotes.length} 篇筆記` : "最近的學習記錄"}
                </p>
              </div>
              <SearchBar onSearch={setSearchQuery} />
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="space-y-4">
                    <Skeleton className="h-48 w-full" />
                  </div>
                ))}
              </div>
            ) : displayedNotes.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  {searchQuery ? "找不到相關筆記" : "尚無筆記"}
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {displayedNotes.map((note) => (
                    <NoteCard
                      key={note.id}
                      id={note.id}
                      slug={note.slug}
                      title={note.title}
                      preview={note.content.substring(0, 150) + "..."}
                      subject={note.subject}
                      category={note.category}
                      date={new Date(note.date)}
                    />
                  ))}
                </div>

                {!searchQuery && filteredNotes.length > 6 && (
                  <div className="text-center">
                    <Link href="/notes">
                      <Button
                        variant="outline"
                        size="lg"
                        className="gap-2 backdrop-blur-md"
                        data-testid="button-view-all-notes"
                      >
                        查看所有筆記
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        <CategorySection />
        <AboutSection />

        <footer className="relative z-10 border-t border-border/40 backdrop-blur-sm bg-background/80 py-8">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm text-muted-foreground" data-testid="text-footer">
              © 2024 星空筆記 · 用心記錄每一刻學習
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
