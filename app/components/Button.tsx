import React from 'react'
import styles from './Button.module.scss'

export const Button = (props: { type?: string; className?: string; children?: any }) => {
    const type = props.type ? props.type : 'primary';
    return <button className={`${styles.button} ${props.className} ${styles[type]}`}>{props.children}</button>
}