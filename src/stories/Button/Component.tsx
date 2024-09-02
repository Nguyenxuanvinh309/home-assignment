import React from 'react';
import Component from '@/components/Button';
import { ButtonProps as Props } from '@/components/Button';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: Props) => {
  return (
    <Component
      primary={primary}
      size={size}
      label={label}
      {...props}
    />
  );
};
