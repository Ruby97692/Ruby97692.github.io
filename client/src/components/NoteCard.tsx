import { Link } from "wouter";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, BookOpen } from "lucide-react";
import { format } from "date-fns";
import { zhTW } from "date-fns/locale";

interface NoteCardProps {
  id: string;
  slug: string;
  title: string;
  preview: string;
  subject: string;
  category: string;
  date: Date;
}

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

export default function NoteCard({ id, slug, title, preview, subject, category, date }: NoteCardProps) {
  return (
    <Link href={`/note/${slug}`}>
      <a data-testid={`card-note-${id}`}>
        <Card className="h-full backdrop-blur-sm bg-card/60 border-border/40 hover-elevate transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden">
          <CardHeader className="space-y-3 pb-4">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-lg font-semibold line-clamp-2 flex-1" data-testid={`text-title-${id}`}>
                {title}
              </h3>
              <BookOpen className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            </div>
            <Badge 
              className={`w-fit text-xs ${categoryColors[category] || "bg-muted text-muted-foreground"}`}
              data-testid={`badge-category-${id}`}
            >
              {category}
            </Badge>
          </CardHeader>
          
          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed" data-testid={`text-preview-${id}`}>
              {preview}
            </p>
          </CardContent>
          
          <CardFooter className="pt-4 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="w-3.5 h-3.5" />
              <time dateTime={date.toISOString()} data-testid={`text-date-${id}`}>
                {format(date, "yyyy年MM月dd日", { locale: zhTW })}
              </time>
            </div>
            <Badge variant="outline" className="text-xs" data-testid={`badge-subject-${id}`}>
              {subject}
            </Badge>
          </CardFooter>
        </Card>
      </a>
    </Link>
  );
}
