import React from 'react'
import styles from './Button.module.scss'
import Link from 'next/link';

export const Button = (props: { type?: string; className?: string; children?: any }) => {
    const type = props.type ? props.type : 'primary';
    return <button className={`${styles.button} ${props.className} ${styles[type]}`}>{props.children}</button>
}

export const AnchorButton = (props: { href: string, type?: string; className?: string; children?: any }) => {
    const type = props.type ? props.type : 'primary';
    return <Link href={props.href} className={`${styles.button} ${props.className} ${styles[type]}`}>{props.children}</Link>
}