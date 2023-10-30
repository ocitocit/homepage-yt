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
        `flex w-full items-center p-3 gap-4 rounded-lg
         ${
           isActive
             ? 'font-bold bg-neutral-100 hover:bg-secondary'
             : undefined
         }
        `
      )}
    >
      <Icon className="w-6 h-6" />
      <div
        className="
        text-ellipsis 
        whitespace-nowrap 
        overflow-hidden"
      >
        {title}
      </div>
    </div>
  );
};
export default LargeIconSidebar;
