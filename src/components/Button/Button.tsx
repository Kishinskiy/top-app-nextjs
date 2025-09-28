import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import ArrowIcon from './ArrowIcon';
import * as React from 'react';

export default function Button({ appearance, arrow = 'none', children, className, ...props}: ButtonProps) {
  return (
    <button className={cn(styles.button, className, {
      [styles.primary]: appearance === 'primary',
      [styles.ghost]: appearance === 'ghost'
    })}
      {...props}>
          {children}
          {arrow !== 'none' && <span className={cn(styles.arrow, {
            [styles.right]: arrow === 'right',
            [styles.down]: arrow === 'down'
          })}>
              <ArrowIcon />
            </span>}
    </button>
  );
}
