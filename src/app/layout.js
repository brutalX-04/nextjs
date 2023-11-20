import { Gabarito } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/Navbar'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'xmod-web',
  description: 'Copyright © 2023 by xmod-04',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gabarito.className}>
      <Navbar />
      {children}
      </body>
    </html>
  )
}
