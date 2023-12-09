'use client';

import SidebarProvider from '@/context/SidebarContext';
import { ThemeProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

const Provider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <ThemeProvider {...props}>
      <SidebarProvider>{children}</SidebarProvider>
    </ThemeProvider>
  );
};

export default Provider;
