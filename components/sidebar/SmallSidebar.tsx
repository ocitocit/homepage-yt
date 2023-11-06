'use client';

import { Clapperboard, Home, Library, Repeat } from 'lucide-react';
import SmallIconSidebar from './SmallIconSidebar';
import { useSidebarContext } from '@/context/SidebarContext';

const SmallSidebar = () => {
  const { isLargeOpen } = useSidebarContext();

  return (
    <aside
      className={`
        scrollbar-hidden
        sticky
        top-0
        ml-1
        hidden
        flex-col
        overflow-y-auto
        pb-4
        md:flex
        ${isLargeOpen ? 'lg:hidden' : 'lg:flex'}
     `}
    >
      <SmallIconSidebar icon={Home} title="Home" url="/" />
      <SmallIconSidebar icon={Repeat} title="Shorts" url="/shorts" />
      <SmallIconSidebar icon={Clapperboard} title="Subscriptions" url="/subscriptions" />
      <SmallIconSidebar icon={Library} title="Library" url="/library" />
    </aside>
  );
};

export default SmallSidebar;
