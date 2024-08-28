import React from 'react';
import './styles.css'; 

export interface InputProps {
  /**
   * How large should the input be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Input contents
   */
  label?: string;
  placeholder?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const InputComponent = ({
  size = 'medium',
  label,
  placeholder,
  ...props
}: InputProps) => {
  const defaultStyle = 'text-black w-full bg-white hover:border-primary-9 transition-[border]';
  return (
    <input
      placeholder={placeholder}
      className={`${['storybook-input', `storybook-input--${size}`, defaultStyle].join(' ')}`}
      {...props}
    />
  );
};

export default InputComponent;