import { JSX } from "react";
import { TagProps } from "./Tag.props";
import styles from './Tag.module.css';
import cn from 'classnames';

export default function Tag({ size='medium', children, color="ghost", className, href, ...props }: TagProps): JSX.Element {
    return (
        <div className={cn(styles.tag, className, {
            [styles.small]: size === 'small',
            [styles.medium]: size === 'medium',
            [styles.large]: size === 'large',
            [styles.ghost]: color === 'ghost',
            [styles.gray]: color === 'gray',
            [styles.green]: color === 'green',
            [styles.red]: color === 'red',
            [styles.primary]: color === 'primary'
        })}
            {...props}>
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    );
}
