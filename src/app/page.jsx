"use client";

import React from 'react'
import styles from "./page.module.css"
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import Link from 'next/link';
import PaperWrapper from './paper-wrapper';

const Home = () => {
  return (
    <PaperWrapper>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.data}>
            <p className={styles.text}></p>
            <h3 className={styles.greet}>{"Hello It's Me"}</h3>
            <h1 className={styles.name}>Suraj Naithani</h1>
            <span className={styles.works}>And I’m a <TypeAnimation
              className={styles.work}
              sequence={[
                "Developer",
                5000,
                "Web designer",
                5000,
                () => { }
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: 'inline-block' }}
            />
            </span>
            <p className={styles.desc}>I am a MERN (MongoDB, Express.js, React, Node.js) and Next.js developer experienced in full-stack web development. With expertise in frontend and backend technologies, I create scalable applications and deliver seamless user experiences. My goal is to meet client requirements and build efficient solutions using the MERN stack.</p>
            <div className={styles.buttons}>
              <Link className={styles.button} href="/contact">
                Let’s talk
              </Link>
              <Link className={styles.button} href="/portfolio">
                Portfolio
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <Image src="/avtar2.jpg" alt="image" className={styles.image} width={400} height={400} />
        </div>
      </div>
    </PaperWrapper>
  )
}

export default Home