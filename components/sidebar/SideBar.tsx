'use client';
import { useSidebarContext } from '@/context/SidebarContext';
import LargeSidebar from './LargeSidebar';
import SmallSidebar from './SmallSidebar';

const SideBar = () => {
  const { isSmallOpen, close } = useSidebarContext();
  return (
    <>
      <SmallSidebar />
      {isSmallOpen && (
        <div
          onClick={close}
          className="
            fixed
            inset-0
            z-[999]
            bg-slate-800
            opacity-50
            lg:hidden
          "
        />
      )}
      <LargeSidebar />
    </>
  );
};

export default SideBar;
