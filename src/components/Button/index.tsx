import React from 'react';
import './styles.css'; 

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
const ButtonComponent = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'text-white w-full bg-primary hover:border-primary-9 hover:bg-white hover:text-primary transition-[background]' : 'w-full bg-white border-primary-9 text-primary hover:border-primary-9 hover:bg-primary hover:text-white transition-[background] mt-[20px]';
  return (
    <button 
      className={`${['storybook-button', `storybook-button--${size}`].join(' ')} ${mode}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default ButtonComponent;