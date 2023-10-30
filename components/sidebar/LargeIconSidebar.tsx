'use client';
import { LucideIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { buttonStyle } from '../Button';

interface LargeIconSidebarProps {
  icon: LucideIcon;
  title: string;
  url: string;
  isActive?: boolean;
}

const LargeIconSidebar: React.FC<LargeIconSidebarProps> = ({
  icon: Icon,
  title,
  url,
  isActive = false
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(url)}
      className={twMerge(
        buttonStyle({ variant: 'ghost' }),
        `flex w-full items-center gap-4 rounded-lg p-3
         ${
           isActive
             ? 'bg-neutral-100 font-bold hover:bg-secondary'
             : undefined
         }
        `
      )}
    >
      <Icon className="h-6 w-6" />
      <div
        className="
        overflow-hidden 
        text-ellipsis 
        whitespace-nowrap"
      >
        {title}
      </div>
    </div>
  );
};
export default LargeIconSidebar;
