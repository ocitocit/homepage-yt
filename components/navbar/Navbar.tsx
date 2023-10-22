'use client';

import { Bell, Menu, Mic, Search, Upload, User } from 'lucide-react';
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

      <form className="hidden md:flex justify-center flex-grow gap-4">
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="
              rounded-l-full 
              border
              border-secondary-border
              shadow-inner
              shadow-secondary
              py-1
              px-4
              text-lg
              w-full
              focus:border-blue-500
              outline-none
            "
          />
          <Button
            className="
              px-4
              py-2
              rounded-r-full
              border
              border-secondary-border
              border-l-0
              flex-shrink-0
            "
          >
            <Search />
          </Button>
        </div>
        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </form>

      <div className="flex flex-shrink-0 md:gap-2">
        <Button size="icon" variant="ghost" className="md:hidden">
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
    </div>
  );
};

export default Navbar;
