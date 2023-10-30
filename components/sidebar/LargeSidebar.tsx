import { Home } from 'lucide-react';
import LargeIconSidebar from './LargeIconSidebar';
import ContainerLargeSidebar from './ContainerLargeSidebar';

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
      </ContainerLargeSidebar>
    </aside>
  );
};

export default LargeSidebar;
