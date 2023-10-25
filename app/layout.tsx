import './globals.css'
import type { Metadata } from 'next'
import { Epilogue, Roboto } from 'next/font/google'

const epilogue = Epilogue({ 
  weight: ['600','900'], 
  subsets: ['latin'],
  variable: '--font-epilogue'
 });

const roboto = Roboto({
  weight: '400',
  subsets:['latin'],
variable: '--font-roboto'
});

export const metadata: Metadata = {
  title: 'Add shark digital agency',
  description: 'Rentabilidades inigualables y posibilidades publicitarias ilimitadas con nuestro equipo de veteranos',
  icons: 'adshark_logo_navbar.svg'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${epilogue.variable} ${roboto.variable}`}>{children}</body>
    </html>
  )
}
