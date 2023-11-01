'use client';

import LargeIconSidebar from './LargeIconSidebar';
import ContainerLargeSidebar from './ContainerLargeSidebar';
import { playlists, subscriptions } from '@/libs/sidebarData';
import {
  Clapperboard,
  Clock,
  Film,
  Flame,
  Gamepad2,
  History,
  Home,
  Library,
  Lightbulb,
  ListVideo,
  Music2,
  Newspaper,
  PlaySquare,
  Podcast,
  Radio,
  Repeat,
  Shirt,
  ShoppingBag,
  Trophy
} from 'lucide-react';

const LargeSidebar = () => {
  return (
    <aside
      className="
        scrollbar-hidden
        absolute
        top-0
        hidden
        w-56
        flex-col
        gap-2
        overflow-y-auto
        px-2
        pb-4
        lg:sticky
        lg:flex
      "
    >
      <ContainerLargeSidebar>
        <LargeIconSidebar isActive icon={Home} title="Home" url="/" />
        <LargeIconSidebar icon={Repeat} title="Shorts" url="/shorts" />
        <LargeIconSidebar icon={Clapperboard} title="Subscriptions" url="/subscriptions" />
      </ContainerLargeSidebar>
      <hr />
      <ContainerLargeSidebar visibleItemCount={5}>
        <LargeIconSidebar icon={Library} title="Library" url="/library" />
        <LargeIconSidebar icon={History} title="History" url="/history" />
        <LargeIconSidebar icon={PlaySquare} title="Your Videos" url="/your-video" />
        <LargeIconSidebar icon={Clock} title="Watch Later" url="/playlist?list=WL" />
        {playlists.map((playlist) => (
          <LargeIconSidebar
            key={playlist.id}
            icon={ListVideo}
            title={playlist.name}
            url={`/playlist?list=${playlist.id}`}
          />
        ))}
      </ContainerLargeSidebar>
      <hr />
      <ContainerLargeSidebar title="Subscriptions">
        {subscriptions.map((subscription) => (
          <LargeIconSidebar
            key={subscription.id}
            imgSrc={subscription.imgUrl}
            title={subscription.channelName}
            url={`/@${subscription.channelName}`}
          />
        ))}
      </ContainerLargeSidebar>
      <hr />
      <ContainerLargeSidebar title="Explore">
        <LargeIconSidebar icon={Flame} title="Trending" url="/trending" />
        <LargeIconSidebar icon={ShoppingBag} title="Shopping" url="/shopping" />
        <LargeIconSidebar icon={Music2} title="Music" url="/music" />
        <LargeIconSidebar icon={Film} title="Movies & TV" url="/movies-tv" />
        <LargeIconSidebar icon={Radio} title="Live" url="/live" />
        <LargeIconSidebar icon={Gamepad2} title="Gaming" url="/gaming" />
        <LargeIconSidebar icon={Newspaper} title="News" url="/news" />
        <LargeIconSidebar icon={Trophy} title="Sports" url="/sports" />
        <LargeIconSidebar icon={Lightbulb} title="Learning" url="/learning" />
        <LargeIconSidebar icon={Shirt} title="Fashion & Beauty" url="/fashion-beauty" />
        <LargeIconSidebar icon={Podcast} title="Podcasts" url="/podcasts" />
      </ContainerLargeSidebar>
    </aside>
  );
};

export default LargeSidebar;
