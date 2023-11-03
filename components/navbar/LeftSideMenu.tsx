import { useSidebarContext } from '@/context/SidebarContext';
import { Button } from '../Button';
import { Menu } from 'lucide-react';
import Logo from './Logo';

interface LeftSideMenuProps {
  hidden?: boolean;
}

const LeftSideMenu: React.FC<LeftSideMenuProps> = ({ hidden = false }) => {
  const { toggle } = useSidebarContext();

  return (
    <div
      className={`
          flex-shrink-0
          items-center
          gap-4
          ${hidden ? 'hidden' : 'flex'}
        `}
    >
      <Button onClick={toggle} variant="ghost" size="icon">
        <Menu />
      </Button>
      <Logo />
    </div>
  );
};

export default LeftSideMenu;
