import { Clapperboard, Home, Library, Repeat } from 'lucide-react';
import ContainerSmallSidebar from './ContainerSmallSidebar';

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
      <ContainerSmallSidebar title="Home" url="/">
        <Home />
      </ContainerSmallSidebar>
      <ContainerSmallSidebar title="Short" url="/shorts">
        <Repeat />
      </ContainerSmallSidebar>
      <ContainerSmallSidebar title="Subscriptions" url="/subscriptions">
        <Clapperboard />
      </ContainerSmallSidebar>
      <ContainerSmallSidebar title="Library" url="/library">
        <Library />
      </ContainerSmallSidebar>
    </aside>
  );
};

export default SmallSidebar;
