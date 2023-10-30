import CategoryPills from '@/components/CategoryPills';
import VideoGridItem from '@/components/VideoGridItem';
import SideBar from '@/components/sidebar/SideBar';
import { categories, videos } from '@/libs/data';

const Home = () => {
  return (
    <main
      className="
        flex-grow-1 
        grid
        grid-cols-[auto,1fr]
        overflow-auto
      "
    >
      <SideBar />
      <div className="overflow-x-hidden px-8 pb-4">
        <div className="sticky top-0 z-10 bg-white pb-4">
          <CategoryPills categories={categories} />
        </div>
        <div
          className="
          grid
          grid-cols-[repeat(auto-fill,minmax(300px,1fr))]
          gap-4
          "
        >
          {videos.map((video) => (
            <VideoGridItem key={video.id} {...video} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
