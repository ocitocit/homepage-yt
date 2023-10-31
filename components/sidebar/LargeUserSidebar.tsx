'use client';

import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { buttonStyle } from '../Button';
import Image from 'next/image';

interface LargeUserSidebarProps {
  imageUrl: string;
  title: string;
  url: string;
  isActive?: boolean;
}

const LargeUserSidebar: React.FC<LargeUserSidebarProps> = ({
  imageUrl,
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
        `flex w-full cursor-pointer items-center gap-4 rounded-lg p-3
         ${isActive ? 'bg-neutral-100 font-bold hover:bg-secondary' : undefined}
        `
      )}
    >
      <Image
        src={imageUrl}
        height="100"
        width="100"
        alt={title}
        className="h-6 w-6 rounded-full"
      />
      <div
        className="
        overflow-hidden 
        text-ellipsis
        whitespace-nowrap 
        "
      >
        {title}
      </div>
    </div>
  );
};
export default LargeUserSidebar;
