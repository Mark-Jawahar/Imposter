'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { sounds, triggerHaptic } from '@/lib/sound';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'gold' | 'ghost' | 'glass';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  soundType?: 'click' | 'tap' | 'vote';
  haptic?: number;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  soundType = 'click',
  haptic = 12,
  className = '',
  onClick,
  disabled,
  ...props
}) => {
  const getVariantStyles = (): string => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold shadow-lg shadow-violet-600/30 hover:from-violet-500 hover:to-indigo-500 active:from-violet-700 active:to-indigo-700 border border-violet-400/30';
      case 'secondary':
        return 'bg-slate-800/80 text-slate-100 font-medium hover:bg-slate-700 active:bg-slate-900 border border-slate-700/80 shadow-md';
      case 'danger':
        return 'bg-gradient-to-r from-rose-600 to-red-600 text-white font-semibold shadow-lg shadow-rose-600/30 hover:from-rose-500 hover:to-red-500 active:from-rose-700 border border-rose-400/30';
      case 'gold':
        return 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold shadow-lg shadow-amber-500/30 hover:from-amber-400 hover:to-yellow-400 active:from-amber-600 border border-amber-300/40';
      case 'glass':
        return 'bg-white/10 text-white font-medium backdrop-blur-md border border-white/20 hover:bg-white/15 active:bg-white/5';
      case 'ghost':
        return 'bg-transparent text-slate-400 hover:text-white hover:bg-white/5 active:bg-white/10';
      default:
        return '';
    }
  };

  const getSizeStyles = (): string => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1.5 text-xs rounded-xl gap-1.5';
      case 'md':
        return 'px-5 py-3 text-sm font-semibold rounded-2xl gap-2';
      case 'lg':
        return 'px-6 py-4 text-base font-bold rounded-2xl gap-2.5';
      case 'xl':
        return 'px-8 py-5 text-lg font-extrabold rounded-3xl gap-3';
      default:
        return 'px-4 py-2.5 text-sm rounded-2xl gap-2';
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (soundType === 'click') sounds.playClick();
    else if (soundType === 'tap') sounds.playTap();
    else if (soundType === 'vote') sounds.playVoteSelected();

    triggerHaptic(haptic);
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <motion.button
      whileTap={disabled ? undefined : { scale: 0.96 }}
      whileHover={disabled ? undefined : { scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      onClick={handleClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500/50 disabled:opacity-50 disabled:pointer-events-none ${
        fullWidth ? 'w-full' : ''
      } ${getVariantStyles()} ${getSizeStyles()} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </motion.button>
  );
};
