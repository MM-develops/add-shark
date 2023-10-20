import React from "react";
import styles from './Modal.module.scss';

export const Modal = (props) => {
    return <div className={`${styles.background} ${props.isOpen && styles.open}`}>
        <div className={styles.fakeBtn} onClick={props.onClose}></div>
        <div className={styles.contentContainer}>
            <button className={styles.close} onClick={props.onClose}>x</button>
            <h2 className={styles.modalTitle}>{props.title}</h2>
            <div className={styles.content}>{props.children}</div>
        </div>
    </div>
}