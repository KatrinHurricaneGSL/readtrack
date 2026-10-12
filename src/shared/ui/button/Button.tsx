import clsx from 'clsx';
import type { ReactNode } from 'react';

import styles from './Button.module.css';

interface ButtonProps {
  htmlType?: 'button' | 'reset' | 'submit' | undefined;
  type?: 'primary' | 'outline' | 'text';
  size?: 'small' | 'middle' | 'large';
  danger?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

const sizeClass = {
  small: styles.small,
  middle: styles.middle,
  large: styles.large,
};

export function Button({
  htmlType = 'button',
  type = 'primary',
  size = 'middle',
  danger,
  onClick,
  children,
  disabled,
  loading,
  className,
}: ButtonProps) {
  return (
    <button
      type={htmlType}
      onClick={onClick}
      disabled={disabled || loading}
      className={clsx(styles.button, className, sizeClass[size], styles[type], {
        [styles.danger]: danger,
      })}
    >
      {children}
    </button>
  );
}
