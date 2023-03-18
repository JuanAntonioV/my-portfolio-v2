import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { calibre, sfMono } from '@/fonts/CustomFont'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${calibre.variable} ${sfMono.variable} ${inter.className}`}>
      <Component {...pageProps} />
    </main>
  )
}
