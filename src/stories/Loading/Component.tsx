import React from 'react';
import Component from '@/components/Loading';
import { LoadingProps as Props } from '@/components/Loading';

/**
 * Primary UI component for user interaction
 */
export const Loading = ({
  size = 'medium',
  backgroundColor,
  ...props
}: Props) => {
  return (
    <Component
      size={size}
      backgroundColor={backgroundColor}
      {...props}
    />
  );
};
