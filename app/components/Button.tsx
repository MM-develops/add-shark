import React from 'react'
import styles from './Button.module.scss'

export const Button = props => {
    return <button className={`${styles.button} ${props.className}`}>{props.children}</button>
}