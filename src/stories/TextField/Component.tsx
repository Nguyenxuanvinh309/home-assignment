import React from 'react';
import TextFieldComponent from '../../components/TextField';

export interface TextFieldProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the text-field be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * TextField contents
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
}: TextFieldProps) => {
  return (
    <TextFieldComponent primary={primary} size={size} label={label} {...props} />
  );
};
