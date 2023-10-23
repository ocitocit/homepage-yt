'use client';

import { useState } from 'react';
import Logo from './Logo';
import { Button } from '../Button';
import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from 'lucide-react';

const Navbar = () => {
  const [showFullWidhtSearch,setShowFullWidhtSearch] = useState(false)

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
          ${showFullWidhtSearch? "hidden":"flex"}
        `}
      >
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <Logo />
      </div>

      <form className={`
          justify-center 
          flex-grow 
          gap-4
          ${showFullWidhtSearch? "flex":"hidden md:flex"}
        `}
      >

        {showFullWidhtSearch && (
          <Button 
            onClick={()=>setShowFullWidhtSearch(false)}
            type="button" 
            size="icon" 
            variant="ghost"
            className="flex-shrink-0"
          >
            <ArrowLeft />
          </Button>
        )}

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
        <Button 
          type="button" 
          size="icon" 
          className="flex-shrink-0">
          <Mic />
        </Button>
      </form>

      <div className={`
          flex-shrink-0 
          md:gap-2
          ${showFullWidhtSearch? "hidden":"flex"}
        `}
      >
        <Button 
          onClick={()=> setShowFullWidhtSearch(true)}
          size="icon" 
          variant="ghost" 
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button 
          size="icon" 
          variant="ghost" 
          className="md:hidden"
        >
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
