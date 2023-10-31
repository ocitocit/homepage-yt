'use client';

import React, { useState } from 'react';
import { Button } from '../Button';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ContainerLargeSidebarProps {
  children: React.ReactNode;
  title?: string;
  visibleItemCount?: number;
}
const ContainerLargeSidebar: React.FC<ContainerLargeSidebarProps> = ({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const childrenArray = React.Children.toArray(children).flat();
  const showExpandButton = childrenArray.length > visibleItemCount;
  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, visibleItemCount);
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;

  return (
    <div>
      {title && <div className="mb-1 ml-4 mt-2 text-lg">{title}</div>}
      {visibleChildren}
      {showExpandButton && (
        <Button
          onClick={() => setIsExpanded((e) => !e)}
          variant="ghost"
          className="
            flex 
            w-full 
            items-center 
            gap-4 
            rounded-lg 
            p-3
          "
        >
          <ButtonIcon className="h-6 w-6" />
          <div>{isExpanded ? 'Show Less' : 'Show more'}</div>
        </Button>
      )}
    </div>
  );
};

export default ContainerLargeSidebar;
