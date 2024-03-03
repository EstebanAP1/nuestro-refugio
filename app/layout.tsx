import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '@/app/ui/css/globals.css'
import Header from '@/app/ui/header'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: {
    template: '%s | Nuestro Refugio',
    default: 'Nuestro Refugio'
  },
  description:
    'Nuestro Refugio es un hogar gerontogeriátrico, que brinda atención integral a adultos mayores en situación de vulnerabilidad.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} bg-page flex flex-col h-screen`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
