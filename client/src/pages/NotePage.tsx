import { useParams, Link } from "wouter";
import type { Note } from "@/types/note";
import { notes } from "@/data/content";
import MarkdownContent from "@/components/MarkdownContent";
import StarField from "@/components/StarField";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, ArrowLeft, Clock } from "lucide-react";
import { format } from "date-fns";
import { zhTW } from "date-fns/locale";

export default function NotePage() {
  const { slug } = useParams();

  const note = notes.find((n) => n.slug === slug);
  const isLoading = false;

  const categoryColors: Record<string, string> = {
    數學: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    物理: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    化學: "bg-green-500/20 text-green-300 border-green-500/30",
    生物: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    歷史: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    文學: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    程式設計: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    英文: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  };

  const calculateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.length / 2;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} 分鐘`;
  };

  return (
    <div className="min-h-screen relative">
      <StarField />
      <div className="relative z-10">
        <Header />

        <div className="container mx-auto px-6 py-12">
          <Link href="/">
            <Button variant="ghost" className="mb-8 gap-2" data-testid="button-back">
              <ArrowLeft className="w-4 h-4" />
              返回首頁
            </Button>
          </Link>

          {isLoading ? (
            <Card className="max-w-4xl mx-auto backdrop-blur-sm bg-card/60 border-border/40">
              <CardHeader className="space-y-6 pb-8">
                <Skeleton className="h-8 w-32" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-6 w-48" />
              </CardHeader>
              <CardContent className="pb-12">
                <div className="space-y-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </CardContent>
            </Card>
          ) : !note ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">找不到此筆記</p>
              <Link href="/">
                <Button className="mt-4">返回首頁</Button>
              </Link>
            </div>
          ) : (
            <Card className="max-w-4xl mx-auto backdrop-blur-sm bg-card/60 border-border/40">
              <CardHeader className="space-y-6 pb-8">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge
                    className={`${categoryColors[note.category] || "bg-muted text-muted-foreground"}`}
                    data-testid="badge-note-category"
                  >
                    {note.category}
                  </Badge>
                  <Badge variant="outline" data-testid="badge-note-subject">
                    {note.subject}
                  </Badge>
                </div>

                <h1 className="text-4xl font-bold leading-tight" data-testid="text-note-title">
                  {note.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={new Date(note.date).toISOString()} data-testid="text-note-date">
                      {format(new Date(note.date), "yyyy年MM月dd日", { locale: zhTW })}
                    </time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span data-testid="text-reading-time">{calculateReadingTime(note.content)}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pb-12">
                <div data-testid="content-note-body">
                  <MarkdownContent content={note.content} />
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <footer className="relative z-10 border-t border-border/40 backdrop-blur-sm bg-background/80 py-8 mt-12">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm text-muted-foreground">© 2024 星空筆記 · 用心記錄每一刻學習</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
