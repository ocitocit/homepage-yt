import { Bell, Mic, Search, Upload, User } from 'lucide-react';
import { Button } from '../Button';

interface UserMenuProps {
  showFull: boolean;
  setShowFull: (value: boolean) => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ showFull, setShowFull }) => {
  return (
    <div
      className={`
          flex-shrink-0 
          md:gap-2
          ${showFull ? 'hidden' : 'flex'}
        `}
    >
      <Button
        onClick={() => setShowFull(true)}
        size="icon"
        variant="ghost"
        className="md:hidden"
      >
        <Search />
      </Button>
      <Button size="icon" variant="ghost" className="md:hidden">
        <Mic />
      </Button>
      <Button size="icon" variant="ghost">
        <Upload />
      </Button>
      <Button size="icon" variant="ghost">
        <Bell />
      </Button>
      <Button size="icon" variant="ghost">
        <User />
      </Button>
    </div>
  );
};

export default UserMenu;
