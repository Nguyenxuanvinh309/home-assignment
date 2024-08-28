import './styles.css';

export interface LoadingProps {
  /**
   * How large loading the input be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Custom style
   */
  backgroundColor?: string;
};

const LoadingComponent = ({
  size = 'medium',
  backgroundColor,
  ...props
}: LoadingProps) => {

  return (
    <div 
      className={`${[
        'storybook-loader',
        `storybook-loader--${size}`,
      ].join(' ')}`} {...props}
      style={{
        ...(backgroundColor && {
          backgroundColor
        })
      }}
    />
  )
};
export default LoadingComponent;