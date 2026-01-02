import NoteCard from '../NoteCard';

export default function NoteCardExample() {
  return (
    <div className="w-full max-w-sm">
      <NoteCard
        id="1"
        slug="微積分基礎-極限與連續"
        title="微積分基礎 - 極限與連續"
        preview="極限是微積分的基礎概念，用於描述函數在某一點附近的行為。當x趨近於某個值時，函數值的變化趨勢..."
        subject="高等數學"
        category="數學"
        date={new Date('2024-01-15')}
      />
    </div>
  );
}
