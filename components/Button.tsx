import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export const buttonStyle = cva(['transition-colors'], {
  variants: {
    variant: {
      default: ['hover:bg-secondary-hover', 'bg-secondary'],
      ghost: ['hover:bg-gray-100'],
      dark: ['bg-secondary-dark', 'hover:bg-secondary-dark-hover', 'text-secondary']
    },
    size: {
      default: ['rounded', 'p-2'],
      icon: ['rounded-full', 'h-10', 'w-10', 'flex', 'justify-center', 'items-center', 'p-2.5']
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
});

type ButtonProps = VariantProps<typeof buttonStyle> & ComponentProps<'button'>;

export const Button = ({ variant, size, className, ...props }: ButtonProps) => {
  return <button {...props} className={twMerge(buttonStyle({ variant, size }), className)} />;
};
