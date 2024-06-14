import type { Metadata } from 'next'
import { Inter,Poppins } from 'next/font/google'
import './globals.css'
import Head from 'next/head'



const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100' ,'200','300','400', '500','700'],
})
export const metadata: Metadata = {
  title: 'Root Software',
  description: "Generated by create Root Software",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <Head>
          <title>Root Software</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Root Software" />
        <meta name="description" content="empresa de software" />
        <meta name="description" content="Mendoza" />
        <meta name="description" content="Argentina" />
        <meta name="author" content="Lucas Echegaray" />
        <meta name="twitter:title" content="Root Software" />
        </Head>

      <body className={poppins.className}>{children}</body>
    </html>
  )
}
