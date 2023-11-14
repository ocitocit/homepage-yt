'use client';

import { Bell, Mic, Search, Upload, User } from 'lucide-react';
import { Button } from '../Button';
import { useCallback, useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';

interface UserMenuProps {
  showFull: boolean;
  setShowFull: (value: boolean) => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ showFull, setShowFull }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => {
    setIsOpen((val) => !val);
  }, [setIsOpen]);

  return (
    <div className="relative">
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
        <Button size="icon" variant="ghost" onClick={toggle}>
          <User />
        </Button>
      </div>
      {isOpen && <ThemeSwitcher />}
    </div>
  );
};

export default UserMenu;
