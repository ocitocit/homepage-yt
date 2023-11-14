'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const src = theme === 'dark' ? '/ytlogodark.png' : '/ytlogo.png';
  return (
    <Image
      onClick={() => router.push('/')}
      alt="logo"
      src={src}
      width="100"
      height="100"
      priority
      className="h-6 cursor-pointer"
    />
  );
};

export default Logo;
