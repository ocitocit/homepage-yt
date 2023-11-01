'use client';

import { SidebarContextType } from '@/types';
import { ReactNode, useContext, useState } from 'react';

interface SidebarProviderProps {
  children: ReactNode;
}

const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const SidebarContext = useContext<SidebarContextType | null>(null);
  const [isLargeOpen, setIsLargeOpen] = useState(true);
  const [isSmallOpen, setisSmallOpen] = useState(true);

  return <SidebarContext.Provider value={{}}>{children}</SidebarContext.Provider>;
};

export default SidebarProvider;
