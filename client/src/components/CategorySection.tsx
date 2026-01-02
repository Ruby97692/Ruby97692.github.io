import type { Note } from "@/types/note";
import { notes } from "@/data/content";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calculator,
  Atom,
  FlaskConical,
  Dna,
  Landmark,
  BookText,
  Code,
  Languages,
  LucideIcon,
} from "lucide-react";

interface CategoryCardProps {
  name: string;
  icon: LucideIcon;
  count: number;
  color: string;
  onClick?: () => void;
}

const CategoryCard = ({ name, icon: Icon, count, color, onClick }: CategoryCardProps) => {
  return (
    <Card
      className="backdrop-blur-sm bg-card/60 border-border/40 hover-elevate active-elevate-2 cursor-pointer transition-all duration-300 hover:shadow-md"
      onClick={onClick}
      data-testid={`card-category-${name}`}
    >
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-lg ${color}`}>
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-base" data-testid={`text-category-name-${name}`}>
              {name}
            </h3>
            <p className="text-sm text-muted-foreground" data-testid={`text-category-count-${name}`}>
              {count} 篇筆記
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function CategorySection() {

  const categoryIcons: Record<string, { icon: LucideIcon; color: string }> = {
    數學: { icon: Calculator, color: "bg-blue-500/20 text-blue-400" },
    物理: { icon: Atom, color: "bg-purple-500/20 text-purple-400" },
    化學: { icon: FlaskConical, color: "bg-green-500/20 text-green-400" },
    生物: { icon: Dna, color: "bg-emerald-500/20 text-emerald-400" },
    歷史: { icon: Landmark, color: "bg-amber-500/20 text-amber-400" },
    文學: { icon: BookText, color: "bg-pink-500/20 text-pink-400" },
    程式設計: { icon: Code, color: "bg-cyan-500/20 text-cyan-400" },
    英文: { icon: Languages, color: "bg-indigo-500/20 text-indigo-400" },
  };

  const categoryCounts = notes.reduce(
    (acc: Record<string, number>, note: Note) => {
      acc[note.category] = (acc[note.category] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const categories = Object.entries(categoryIcons)
    .map(([name, { icon, color }]) => ({
      name,
      icon,
      count: categoryCounts?.[name] || 0,
      color,
    }))
    .filter((cat) => cat.count > 0);

  if (categories.length === 0) {
    return null;
  }

  return (
    <section className="py-16 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3" data-testid="text-categories-title">
            探索分類
          </h2>
          <p className="text-muted-foreground" data-testid="text-categories-subtitle">
            依照科目瀏覽我的學習筆記
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              {...category}
              onClick={() => {
                window.location.href = `/notes?category=${category.name}`;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
