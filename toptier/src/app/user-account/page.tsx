import Menu, { MenuItemData } from '@/components/Menu';
import CardGridUserScores from '@/components/CardGridUserScores';
import wordlepic from '@/assets/wordle.png';
import fortnitepic from '@/assets/fortnite.png';
import warzonepic from '@/assets/warzone.png';

export default function Home() {
  return (
    <div>
      <div className="flex">
        <main className="flex-1 p-6">
          <CardGridUserScores />
        </main>
      </div>
    </div>
  );
} // show-items Home component
