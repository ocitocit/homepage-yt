'use client';

import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { buttonStyle } from '../Button';

interface ContainerSmallSidebarProps {
  children: React.ReactNode;
  title: string;
  url: string;
}

const ContainerSmallSidebar: React.FC<ContainerSmallSidebarProps> = ({
  children,
  title,
  url
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(url)}
      className={twMerge(
        buttonStyle({ variant: 'ghost' }),
        'py-4 px-1 flex flex-col items-center rounded-lg gap-1'
      )}
    >
      {children}
      <div className="text-sm">{title}</div>
    </div>
  );
};

export default ContainerSmallSidebar;
