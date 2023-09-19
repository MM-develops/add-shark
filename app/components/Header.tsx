import Link from "next/link"
import React from "react"
import styles from './../page.module.css'
import { Button } from './Button'
import Image from "next/image"

export const Header = () => {
    return <header className={styles.header}>
        <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
        />
        <nav>
            <Link href="" className={styles.navLink}>Nosotros</Link>
            <Link href="" className={styles.navLink}>Servicios</Link>
            <Link href="" className={styles.navLink}>Contacto</Link>
            <Button>hello</Button>
        </nav>
    </header>
}