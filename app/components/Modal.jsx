import React from "react";
import styles from './Modal.module.scss';

export const Modal = (props) => {
    return <div className={`${styles.background} ${props.isOpen && styles.open}`}>
        <div className={styles.content}>
            <button className={styles.close} onClick={props.onClose}>x</button>
            {props.children}
        </div>
    </div>
}