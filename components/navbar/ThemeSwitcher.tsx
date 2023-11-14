'use client';

import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
  const { setTheme } = useTheme();
  return (
    <div
      className="
          absolute
          right-3
          top-12
          z-20
          w-36
          overflow-hidden
          rounded-xl
          bg-neutral-200
          p-2
          shadow-md
          dark:bg-neutral-800
        "
    >
      <div
        onClick={() => setTheme('light')}
        className="cursor-pointer p-2 hover:rounded-xl hover:bg-neutral-300 dark:hover:bg-neutral-700"
      >
        light
      </div>
      <div
        onClick={() => setTheme('dark')}
        className="cursor-pointer p-2 hover:rounded-xl hover:bg-neutral-300 dark:hover:bg-neutral-700"
      >
        dark
      </div>
      <div
        onClick={() => setTheme('system')}
        className="cursor-pointer p-2 hover:rounded-xl hover:bg-neutral-300 dark:hover:bg-neutral-700"
      >
        system
      </div>
    </div>
  );
};

export default ThemeSwitcher;
