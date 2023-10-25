'use client';

import { useRef, useState } from 'react';
import { Button } from './Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CategoryPillsProps {
  categories: string[];
}

const CategoryPills: React.FC<CategoryPillsProps> = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const [translate, setTranslate] = useState(0);

  const TRANSLATE_AMOUNT = 200;

  const onLeft = () => {
    setTranslate((translate) => {
      const newTranslate = translate - TRANSLATE_AMOUNT;
      if (newTranslate <= 0) return 0;
      return newTranslate;
    });
  };

  const onRight = () => {
    setTranslate((translate) => {
      if (containerRef.current === null) {
        return translate;
      }

      const newTranslate = translate + TRANSLATE_AMOUNT;
      const edge = containerRef.current.scrollWidth;
      const width = containerRef.current.clientWidth;

      if (newTranslate + width >= edge) {
        return edge - width;
      }
      return newTranslate;
    });
  };

  return (
    <div ref={containerRef} className="overflow-x-hidden relative">
      <div
        className="
          flex
          gap-3
          w-[max-content]
          whitespace-nowrap
          transition-transform
        "
        style={{
          transform: `translateX(-${translate}px)`
        }}
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
            onClick={onLeft}
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
            onClick={onRight}
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
