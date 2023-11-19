import Image from "next/image";
import Link from "next/link";
import styles from './page.module.css';
import Navbar from "../component/client/navbar/Navbar";
import Footer from "../component/client/footer/Footer";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Custom404 = () => {
    return (
        <div className={inter.className}>
            <div className={styles.notFound}>
                <Navbar />
                <div className={styles.notFoundContainer}>
                    <div className={styles.not_found}>
                        <h1>4<span className={styles.icon}>😟</span>4</h1>
                        {/* <Image src={"/errornf.png"} alt='404' width={650} height={350} /> */}
                        <h2 className={styles.errorTitle}> Page Not Found</h2>
                        <p className={styles.errorDesc}>We re sorry, the page you requested could not be found. Please check the URL for any typing errors or navigate back to the homepage...</p>
                        <Link href="/" className={styles.button}>Go Home</Link>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Custom404;