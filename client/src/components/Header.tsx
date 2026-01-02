import { Link } from "wouter";
import { Sparkles, BookOpen, User, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-md bg-background/80">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/">
            <div className="flex items-center gap-2 hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-all cursor-pointer" data-testid="link-home">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold font-sans bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                星空筆記
              </span>
            </div>
          </Link>

          <nav className="flex items-center gap-2">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2" data-testid="link-home-nav">
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">首頁</span>
              </Button>
            </Link>
            <Link href="/notes">
              <Button variant="ghost" size="sm" className="gap-2" data-testid="link-notes">
                <BookOpen className="w-4 h-4" />
                <span className="hidden sm:inline">筆記</span>
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost" size="sm" className="gap-2" data-testid="link-about">
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">關於我</span>
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
