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
      <div className="overflow-x-hidden px-8 pb-4">
        <div className="sticky top-0 z-10 bg-white pb-4">
          <CategoryPills categories={categories} />
        </div>
      </div>
    </main>
  );
};

export default Home;
