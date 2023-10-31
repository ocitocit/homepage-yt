'use client';

import LargeIconSidebar from './LargeIconSidebar';
import ContainerLargeSidebar from './ContainerLargeSidebar';
import { playlists, subscriptions } from '@/libs/sidebarData';
import {
  Clapperboard,
  Clock,
  History,
  Home,
  Library,
  ListVideo,
  PlaySquare,
  Repeat
} from 'lucide-react';
import LargeUserSidebar from './LargeUserSidebar';

const LargeSidebar = () => {
  return (
    <aside
      className="
        scrollbar-hidden
        absolute
        top-0
        flex
        w-56
        flex-col
        gap-2
        overflow-y-auto
        px-2
        pb-4
        lg:sticky
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
          <LargeUserSidebar
            key={subscription.id}
            imageUrl={subscription.imgUrl}
            title={subscription.channelName}
            url={`/@${subscription.channelName}`}
          />
        ))}
      </ContainerLargeSidebar>
    </aside>
  );
};

export default LargeSidebar;
