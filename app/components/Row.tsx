import React from "react";
import styles from './Row.module.scss';

export const Row = (props: { color?: string; className?: string; children: any; }) => {
    const color = props.color ? props.color : 'white';
    return <div className={`${styles.row} ${styles[color]} ${props.className}`}>{props.children}</div>
}