"use client";

import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [active, setActive] = useState(false);
    const currentRoute = usePathname();
    // console.log(currentRoute);
    return (

        <>
            <nav className={styles.container}>
                <Link className={styles.logo} href="/">
                    <span className={styles.firstName}>{"</"}</span>
                    <span className={styles.lastName}>{">"}</span>
                </Link>
                <div className={styles.navbar}>
                    <div onClick={() => setActive(!active)} className={active ? `${styles.menu} ${styles.menuActive}` : `${styles.menu}`}>
                        {
                            (active === false) ? <AiOutlineMenu className={styles.icons} /> : <AiOutlineClose className={styles.icons} />
                        }
                    </div>
                    <div className={`${styles.links} ${active ? styles.mobile_menu_links : ''}`}>
                        <Link className={`${styles.link} ${currentRoute === '/' ? styles.activeLink : ''}`} onClick={() => setActive(false)} href="/">Home</Link>
                        <Link className={`${styles.link} ${currentRoute === '/about' ? styles.activeLink : ''}`} onClick={() => setActive(false)} href="/about">About</Link>
                        <Link className={`${styles.link} ${currentRoute === '/portfolio' ? styles.activeLink : ''}`} onClick={() => setActive(false)} href="/portfolio">Portfolio</Link>
                        <Link className={`${styles.link} ${currentRoute === '/contact' ? styles.activeLink : ''}`} onClick={() => setActive(false)} href="/contact">Contact</Link>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Navbar