'use client';

import { Menu } from 'lucide-react';
import Logo from './Logo';
import { Button } from '../Button';

const Navbar = () => {
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
        className="
        flex
        gap-4
        items-center
        flex-shrink-0
        "
      >
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <Logo />
      </div>
    </div>
  );
};

export default Navbar;
