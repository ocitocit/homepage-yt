'use client';

import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { buttonStyle } from '../Button';
import { LucideIcon } from 'lucide-react';

interface SmallIconSidebarProps {
  icon: LucideIcon;
  title: string;
  url: string;
}

const SmallIconSidebar: React.FC<SmallIconSidebarProps> = ({ icon: Icon, title, url }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(url)}
      className={twMerge(
        buttonStyle({ variant: 'ghost' }),
        'flex flex-col items-center gap-1 rounded-lg px-1 py-4'
      )}
    >
      <Icon className="h-6 w-6" />
      <div className="text-sm">{title}</div>
    </div>
  );
};

export default SmallIconSidebar;
