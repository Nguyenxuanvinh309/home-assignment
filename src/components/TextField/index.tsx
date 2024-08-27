import React from 'react';
import './styles.css'; 

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
const TextFieldComponent = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: TextFieldProps) => {
  const mode = primary ? 'text-white w-full bg-primary hover:border-primary-9 hover:bg-white hover:text-primary transition-[background]' : 'w-full bg-white border-primary-9 text-primary hover:border-primary-9 hover:bg-primary hover:text-white transition-[background] mt-[20px]';
  return (
    <button 
      className={`${['storybook-text-field', `storybook-text-field--${size}`].join(' ')} ${mode}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default TextFieldComponent;