import { Clapperboard, Home, Library, Repeat } from 'lucide-react';
import SmallIconSidebar from './SmallIconSidebar';

const SmallSidebar = () => {
  return (
    <aside
      className="
      top-0
      sticky
      overflow-y-auto
      scrollbar-hidden
      pb-4
      ml-1
      flex
      flex-col
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
