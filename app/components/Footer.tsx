import React from 'react'
import { Button } from './Button'
import Link from 'next/link'

export const Footer = () => {
    return <footer>
        <div>
            <h2>Dejanos ser tu guia en este oceano digital</h2>
            <Button>Contactanos!</Button>
            <p>&copy; Ad shark Digital Agency 2023.</p>
        </div>
        <div>
            <nav>
                <Link href="">Nosotros</Link>
            </nav>
        </div>
    </footer>
}