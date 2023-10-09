'use client'
import Link from "next/link"
import React, { useState } from "react"
import styles from './Header.module.scss'
import { AnchorButton } from './Button'
import Image from "next/image"

export const Header = () => {
    const [menu, toggleMenu] = useState(false);
    const onToggleClick = () => {
        toggleMenu(!menu);
    }
    const hamburgerMenu = <button className={styles.hamButton} onClick={onToggleClick}>
        <Image
            src='/menuburger.svg'
            alt=""
            width={50}
            height={30}
        />
    </button>
    const mobileNav = <div className={`${styles.mobileNav} ${menu ? styles.open : styles.close}`}>
        <button className={styles.closeBtn} onClick={onToggleClick}>X</button>
        <nav>
            <Link href="/nosotros" className={styles.navLink} onClick={onToggleClick}>Nosotros</Link>
            <Link href="/servicios" className={styles.navLink} onClick={onToggleClick}>Servicios</Link>
            <AnchorButton href="/contacto" className={styles.navButton}>Quiero trabajar con ustedes</AnchorButton>
        </nav>
    </div>

    return <header className={styles.header}>
        <Link href="/" className={styles.homeButton}>
            <Image
                src="/adshark_logo_navbar.svg"
                alt="Addshark home page"
                className={styles.logo}
                width={30}
                height={24}
                priority
            />
        </Link>
        {hamburgerMenu}
        {menu && mobileNav}
        <nav className={styles.desktopNav}>
            <Link href="/nosotros" className={styles.navLink}>Nosotros</Link>
            <Link href="/servicios" className={styles.navLink}>Servicios</Link>
            <AnchorButton href="/contacto" className={styles.navButton}>Quiero trabajar con ustedes</AnchorButton>
        </nav>
    </header>
}