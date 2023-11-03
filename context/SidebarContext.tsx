'use client';

import { SidebarContextType } from '@/types';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface SidebarProviderProps {
  children: ReactNode;
}

const SidebarContext = createContext<SidebarContextType | null>(null);

export const useSidebarContext = () => {
  const value = useContext(SidebarContext);
  if (value == null) throw Error('Cannot use outside of SidebarProvider');

  return value;
};

const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [isLargeOpen, setIsLargeOpen] = useState(true);
  const [isSmallOpen, setIsSmallOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (!isScreenSmall()) setIsSmallOpen(false);
    };

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  const isScreenSmall = () => {
    return window.innerWidth < 1024;
  };

  const toggle = () => {
    if (isScreenSmall()) {
      setIsSmallOpen((value) => !value);
    } else {
      setIsLargeOpen((value) => !value);
    }
  };
  const close = () => {
    if (isScreenSmall()) {
      setIsSmallOpen(false);
    } else {
      setIsLargeOpen(false);
    }
  };

  return (
    <SidebarContext.Provider
      value={{
        isLargeOpen,
        isSmallOpen,
        toggle,
        close
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
