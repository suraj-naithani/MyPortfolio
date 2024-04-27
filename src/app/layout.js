import './globals.css'
import { Roboto } from 'next/font/google'
import Footer from "../component/client/footer/Footer"
import Navbar from '../component/client/navbar/Navbar'
import NextTopLoader from 'nextjs-toploader'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Suraj Nathani',
  description: 'Hello It's Me Suraj Naithani And I’m a  MERN Stack Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className={roboto.className}>
        <NextTopLoader
          color="#26ffbf"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          zIndex={1600}
        />
        <div className='container'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
