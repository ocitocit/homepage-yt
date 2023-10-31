'use client';

import { useState } from 'react';
import Logo from './Logo';
import { Button } from '../Button';
import { Menu } from 'lucide-react';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';

const Navbar = () => {
  const [showFullWidhtSearch, setShowFullWidhtSearch] = useState(false);

  return (
    <div
      className="
        mx-4
        mb-6
        flex
        justify-between
        gap-10
        pt-2
        lg:gap-20
      "
    >
      <div
        className={`
          flex-shrink-0
          items-center
          gap-4
          ${showFullWidhtSearch ? 'hidden' : 'flex'}
        `}
      >
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <Logo />
      </div>

      <SearchBar fullSearch={showFullWidhtSearch} setFullSearch={setShowFullWidhtSearch} />

      <UserMenu showFull={showFullWidhtSearch} setShowFull={setShowFullWidhtSearch} />
    </div>
  );
};

export default Navbar;
