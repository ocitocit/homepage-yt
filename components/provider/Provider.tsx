'use client';

import SidebarProvider from '@/context/SidebarContext';
import { ThemeProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { useEffect, useState } from 'react';

export const Provider = ({ children, ...props }: ThemeProviderProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider {...props}>
      <SidebarProvider>{children}</SidebarProvider>
    </ThemeProvider>
  );
};
