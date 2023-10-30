import { Clapperboard, Home, Library, Repeat } from 'lucide-react';
import SmallIconSidebar from './SmallIconSidebar';

const SmallSidebar = () => {
  return (
    <aside
      className="
      scrollbar-hidden
      sticky
      top-0
      ml-1
      flex
      flex-col
      overflow-y-auto
      pb-4
      lg:hidden
      "
    >
      <SmallIconSidebar icon={Home} title="Home" url="/" />
      <SmallIconSidebar icon={Repeat} title="Shorts" url="/shorts" />
      <SmallIconSidebar
        icon={Clapperboard}
        title="Subscriptions"
        url="/subscriptions"
      />
      <SmallIconSidebar icon={Library} title="Library" url="/library" />
    </aside>
  );
};

export default SmallSidebar;
