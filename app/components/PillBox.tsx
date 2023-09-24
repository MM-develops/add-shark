import React from "react"
import style from './PillBox.module.scss'

export const PillBox = props => {
    const type = props.type ? props.type : 'primary';
    return <div className={`${style.main} ${props.className || ''} ${style[type]}`}>{props.children}</div>
}