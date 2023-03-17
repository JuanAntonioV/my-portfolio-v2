import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { calibre, sfMono } from '@/fonts/CustomFont'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${calibre.variable} ${sfMono.variable} font-calibre`}>
      <Component {...pageProps} />
    </main>
  )
}
