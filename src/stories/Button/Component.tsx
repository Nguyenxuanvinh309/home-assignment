import React from 'react';
import ButtonComponent from '../../components/Button';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Component = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  return (
    <ButtonComponent primary={primary} size={size} label={label} {...props} />
  );
};
