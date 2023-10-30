import { Home } from 'lucide-react';
import LargeIconSidebar from './LargeIconSidebar';
import ContainerLargeSidebar from './ContainerLargeSidebar';

const LargeSidebar = () => {
  return (
    <aside
      className="
        flex
        flex-col
        pb-4
        px-2
        w-56
        lg:sticky
        absolute
        top-0
        overflow-y-auto
        scrollbar-hidden
        gap-2
      "
    >
      <ContainerLargeSidebar>
        <LargeIconSidebar isActive icon={Home} title="Home" url="/" />
      </ContainerLargeSidebar>
    </aside>
  );
};

export default LargeSidebar;
