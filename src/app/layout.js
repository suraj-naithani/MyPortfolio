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
  title: 'Home - Web Developer Hub',
  description: 'Welcome to the Web Developer Hub, your central resource for web development. Explore tutorials, frameworks, coding tips, and stay updated with the latest trends in web development. Level up your skills and build amazing web experiences!',
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
