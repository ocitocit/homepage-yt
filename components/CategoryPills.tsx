'use client';

import { useState } from 'react';
import { Button } from './Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CategoryPillsProps {
  categories: string[];
}

const CategoryPills: React.FC<CategoryPillsProps> = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const [isLeftVisible, setIsLeftVisible] = useState(true);
  const [isRightVisible, setIsRightVisible] = useState(true);

  return (
    <div className="overflow-x-hidden relative">
      <div
        className="
          flex
          gap-3
          w-[max-content]
          whitespace-nowrap
          transition-transform
        "
      >
        {categories.map((category, index) => (
          <Button
            key={index}
            onClick={() => setSelectedCategory(category)}
            variant={selectedCategory === category ? 'dark' : 'default'}
            className="py-1 px-3 rounded-lg whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>

      {isLeftVisible && (
        <div
          className="
            absolute
            left-0
            top-1/2
            -translate-y-1/2
            bg-gradient-to-r
            from-white
            from-50%
            to-transparent
            w-24
            h-full
          "
        >
          <Button
            variant="ghost"
            size="icon"
            className="h-full w-auto p-1.5 aspect-square"
          >
            <ChevronLeft />
          </Button>
        </div>
      )}

      {isRightVisible && (
        <div
          className="
            absolute
            right-0
            top-1/2
            -translate-y-1/2
            bg-gradient-to-l
            from-white
            from-50%
            to-transparent
            w-24
            h-full
            flex
            justify-end
          "
        >
          <Button
            variant="ghost"
            size="icon"
            className="h-full w-auto p-1.5 aspect-square"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
};

export default CategoryPills;
