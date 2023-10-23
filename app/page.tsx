import CategoryPills from '@/components/CategoryPills';
import { categories } from '@/libs/data';

const Home = () => {
  return (
    <main
      className="
        grid 
        grid-cols-[auto,1fr]
        flex-grow-1
        overflow-auto
      "
    >
      <div>SIDEBAR</div>
      <div className="sticky top-0 z-10 bg-white pb-4">
        <CategoryPills categories={categories} />
      </div>
    </main>
  );
};

export default Home;
