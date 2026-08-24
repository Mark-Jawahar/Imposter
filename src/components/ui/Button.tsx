'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'gold';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className = '',
  onClick,
  disabled,
  ...props
}) => {
  const getVariantStyles = (): string => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold shadow-lg shadow-violet-600/25 hover:from-violet-500 hover:to-indigo-500 active:from-violet-700 active:to-indigo-700 border border-violet-400/20';
      case 'secondary':
        return 'bg-slate-800/60 text-slate-100 font-medium hover:bg-slate-700/80 active:bg-slate-900/80 border border-slate-700/60 shadow-sm';
      case 'tertiary':
        return 'bg-transparent text-slate-300 font-medium hover:text-white hover:bg-white/5 active:bg-white/10 border border-transparent';
      case 'danger':
        return 'bg-gradient-to-r from-rose-600 to-red-600 text-white font-semibold shadow-lg shadow-rose-600/25 hover:from-rose-500 hover:to-red-500 active:from-rose-700 border border-rose-400/20';
      case 'gold':
        return 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold shadow-lg shadow-amber-500/25 hover:from-amber-400 hover:to-yellow-400 active:from-amber-600 border border-amber-300/30';
      default:
        return '';
    }
  };

  const getSizeStyles = (): string => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1.5 text-xs font-semibold rounded-xl gap-1.5';
      case 'md':
        return 'px-4 py-2.5 text-sm font-semibold rounded-xl gap-2';
      case 'lg':
        return 'px-5 py-3 text-base font-semibold rounded-2xl gap-2';
      case 'xl':
        return 'px-6 py-3.5 text-lg font-bold rounded-2xl gap-2.5';
      default:
        return 'px-4 py-2.5 text-sm font-semibold rounded-xl gap-2';
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <motion.button
      whileTap={disabled ? undefined : { scale: 0.97 }}
      whileHover={disabled ? undefined : { scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 450, damping: 28 }}
      onClick={handleClick}
      disabled={disabled}
      className={clsx(
        'inline-flex items-center justify-center transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:ring-offset-2 focus:ring-offset-[#08090e]',
        'disabled:opacity-40 disabled:pointer-events-none',
        'font-ui',
        fullWidth ? 'w-full' : '',
        getVariantStyles(),
        getSizeStyles(),
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </motion.button>
  );
};