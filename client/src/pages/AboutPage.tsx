import StarField from "@/components/StarField";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen relative">
      <StarField />
      <div className="relative z-10">
        <Header />

        <section className="py-16 relative z-10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-3" data-testid="text-about-page-title">
                關於我
              </h1>
              <p className="text-muted-foreground" data-testid="text-about-page-subtitle">
                認識我的學習旅程
              </p>
            </div>

            <AboutSection />
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
