'use client';

import { useState } from 'react';
import Logo from './Logo';
import { Button } from '../Button';
import {
  ArrowLeft,
  Bell,
  Menu,
  Mic,
  Search,
  Upload,
  User
} from 'lucide-react';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';

const Navbar = () => {
  const [showFullWidhtSearch, setShowFullWidhtSearch] = useState(false);

  return (
    <div
      className="
        flex
        gap-10
        lg:gap-20
        justify-between
        pt-2
        mb-6
        mx-4
      "
    >
      <div
        className={`
          gap-4
          items-center
          flex-shrink-0
          ${showFullWidhtSearch ? 'hidden' : 'flex'}
        `}
      >
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <Logo />
      </div>

      <SearchBar
        fullSearch={showFullWidhtSearch}
        setFullSearch={setShowFullWidhtSearch}
      />

      <UserMenu
        showFull={showFullWidhtSearch}
        setShowFull={setShowFullWidhtSearch}
      />
    </div>
  );
};

export default Navbar;
