'use client';

import { useState } from 'react';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';
import LeftSideMenu from './LeftSideMenu';

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
      <LeftSideMenu hidden={showFullWidhtSearch} />
      <SearchBar fullSearch={showFullWidhtSearch} setFullSearch={setShowFullWidhtSearch} />

      <UserMenu showFull={showFullWidhtSearch} setShowFull={setShowFullWidhtSearch} />
    </div>
  );
};

export default Navbar;
