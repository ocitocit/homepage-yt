'use client';

import { useState } from 'react';
import { Button } from './Button';

interface CategoryPillsProps {
  categories: string[];
}

const CategoryPills: React.FC<CategoryPillsProps> = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

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
            className="
            py-1
            px-3
            rounded-lg
            whitespace-nowrap
          "
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryPills;
