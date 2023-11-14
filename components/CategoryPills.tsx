'use client';

import { useEffect, useRef, useState } from 'react';
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

  useEffect(() => {
    if (containerRef.current == null) return;

    const observer = new ResizeObserver((entries) => {
      const container = entries[0]?.target;
      if (container == null) return;

      setIsLeftVisible(translate > 0);
      setIsRightVisible(translate + container.clientWidth < container.scrollWidth);
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [translate, categories]);

  return (
    <div ref={containerRef} className="relative overflow-x-hidden">
      <div
        className="
          flex
          w-[max-content]
          gap-3
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
            className="whitespace-nowrap rounded-lg px-3 py-1"
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
            h-full
            w-24
            -translate-y-1/2
            bg-gradient-to-r
            from-secondary-accent1
            from-50%
            to-transparent
          "
        >
          <Button
            onClick={onLeft}
            variant="ghost"
            size="icon"
            className="aspect-square h-full w-auto p-1.5"
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
            flex
            h-full
            w-24
            -translate-y-1/2
            justify-end
            bg-gradient-to-l
            from-secondary-accent1
            from-50%
            to-transparent
          "
        >
          <Button
            onClick={onRight}
            variant="ghost"
            size="icon"
            className="aspect-square h-full w-auto p-1.5"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
};

export default CategoryPills;
