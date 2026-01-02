import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Heart, Target } from "lucide-react";

export default function AboutSection() {
  const interests = ["數學", "程式設計", "物理", "文學", "音樂"];

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto backdrop-blur-sm bg-card/60 border-border/40 overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-[auto,1fr] gap-8 md:gap-12 items-start">
              <div className="flex flex-col items-center md:items-start gap-4">
                <Avatar className="w-32 h-32 border-4 border-primary/20 shadow-lg shadow-primary/10">
                  <AvatarFallback className="text-3xl bg-gradient-to-br from-primary to-purple-600 text-primary-foreground">
                    聽
                  </AvatarFallback>
                </Avatar>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold" data-testid="text-about-name">聽風耳語</h3>
                  <p className="text-sm text-muted-foreground" data-testid="text-about-role">
                    終身學習的實踐者
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-2" data-testid="text-about-title">
                    <GraduationCap className="w-8 h-8 text-primary" />
                    關於我
                  </h2>
                  <p className="text-base leading-relaxed text-foreground/90" data-testid="text-about-description">
                    我是一位熱愛學習的學生，相信知識就像星空一樣浩瀚無垠。
                    這個網站記錄了我在學習旅程中的點點滴滴，每一篇筆記都是我理解世界的方式。
                    我希望透過分享這些筆記，不僅能幫助自己複習，也能為其他學習者提供參考。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    興趣領域
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest) => (
                      <Badge 
                        key={interest} 
                        variant="secondary" 
                        className="text-sm"
                        data-testid={`badge-interest-${interest}`}
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    學習目標
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    持續探索新知識，培養批判性思維，
                    並將所學應用於解決實際問題。相信學習是一輩子的事。
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
