import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

export default function HeroSection() {
  const scrollToNotes = () => {
    const notesSection = document.getElementById('notes-section');
    notesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-float">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary animate-twinkle" />
              <span className="text-sm font-medium text-primary">歡迎來到我的學習空間</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight" data-testid="text-hero-title">
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
              在星空下
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
              記錄知識之光
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
            這裡收藏了我的上課筆記與學習心得，每一篇都是探索知識宇宙的足跡。
            <br />
            歡迎一起在浩瀚的學海中遨遊。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="gap-2 backdrop-blur-sm" 
              onClick={scrollToNotes}
              data-testid="button-explore-notes"
            >
              探索筆記
              <ArrowDown className="w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 backdrop-blur-md bg-background/20"
              onClick={() => console.log('About me clicked')}
              data-testid="button-about-me"
            >
              關於我
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground/50" />
      </div>
    </section>
  );
}
