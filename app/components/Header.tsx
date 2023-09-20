import Link from "next/link"
import React from "react"
import styles from './../page.module.css'
import { Button } from './Button'
import Image from "next/image"

export const Header = () => {
    return <header className={styles.header}>
        <Image
            src="/adshark_logo_navbar.svg"
            alt="Addshark home page"
            className={styles.logo}
            width={100}
            height={24}
            priority
        />
        <nav>
            <Link href="" className={styles.navLink}>Nosotros</Link>
            <Link href="" className={styles.navLink}>Servicios</Link>
            <Link href="" className={styles.navLink}>Contacto</Link>
            <Button className={styles.uppercase}>Quiero trabajar con ustedes</Button>
        </nav>
    </header>
}