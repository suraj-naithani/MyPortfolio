import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import PaperWrapper from '../paper-wrapper';

export const metadata = {
    title: 'About Us - Learn More About Our Story',
    description: 'Discover the story behind our mission and the team that drives it. Learn about our values, goals, and the passion that fuels our work. Get to know us better and find out what makes us unique.',
};

const About = () => {
    return (
        <div className={styles.container}>
            <PaperWrapper>
                <section className={styles.about}>
                    <div className={styles.social}>
                        <div className={styles.imageContainer}>
                            <Image src={"/avtar4.jpg"} alt="image" className={styles.image} fill />
                        </div>
                        <div className={styles.details}>
                            <h1 className={styles.heading}>About Me</h1>
                            <p className={styles.desc}>
                                I am full-stack web developer specializing in the MERN (MongoDB, Express.js, React, Node.js) stack, augmented with expertise in Next.js. My proficiency in both frontend and backend technologies allows me to craft scalable applications that prioritize seamless user experiences. With MongoDB and Express.js, I design robust backend systems, while React enables me to create dynamic and modular user interfaces on the frontend.
                            </p>
                            <p className={styles.desc}>
                                The addition of Next.js to my skill set empowers me to optimize React applications through server-side rendering, enhancing performance and user interactions. My goal is to consistently meet client requirements by building efficient solutions that leverage the strengths of the MERN stack, supplemented by the advantages brought by Next.js. This comprehensive approach ensures the development of high-quality, adaptable applications that cater to current needs while remaining flexible for future advancements.
                            </p>
                            <a className={styles.link} href='/resume_suraj_nathani.pdf' download="my-resume.pdf">Resume ↓</a>
                        </div>
                    </div>
                </section>
            </PaperWrapper>

            {/* eduction and experince */}
            <section className={styles.qualification}>
                <div className={styles.education}>
                    <PaperWrapper>
                        <p className={styles.edTitle}>Education</p>
                        <div className={styles.edContainer}>
                            <div className={styles.container_box}>
                                <p className={styles.edYear}>2022-Present | Graphic Era Hill University</p>
                                <p className={styles.edHead}>Master of Computer Applications</p>
                            </div>
                            <div className={styles.container_box}>
                                <p className={styles.edYear}>2019-2022 | Graphic Era Hill University</p>
                                <p className={styles.edHead}>Bachelor in Computer Applications</p>
                            </div>
                        </div>
                    </PaperWrapper>
                </div>

                <div className={styles.education}>
                    <PaperWrapper>
                        <p className={styles.edTitle}>Experience</p>
                        <div className={styles.edContainer}>
                            <div className={styles.container_box}>
                                <p className={styles.edYear}>2022-Present</p>
                                <p className={styles.edHead}>Freelancing</p>
                            </div>
                        </div>
                    </PaperWrapper>
                </div>
            </section>


            {/* skills */}
            <PaperWrapper>
                <section className={styles.skill}>
                    <div className={styles.container_boxes}>
                        <p className={styles.edTitle}>What I know</p>
                        <div className={styles.skill_data}>
                            <div className={styles.cards}>
                                <h2 className={styles.skillTitle}>Front-End</h2>
                                <div className={styles.cardItem}>
                                    <p className={`${styles.items} ${styles.html}`}>HTML</p>
                                    <p className={`${styles.items} ${styles.css}`}>CSS</p>
                                    <p className={`${styles.items} ${styles.js}`}>Javascript</p>
                                    <p className={`${styles.items} ${styles.bootstrap}`}>Bootstrap</p>
                                    <p className={`${styles.items} ${styles.react}`}>React Js 13</p>
                                    <p className={`${styles.items} ${styles.next}`}>Next Js</p>
                                </div>
                            </div>

                            <div className={styles.cards}>
                                <h2 className={styles.skillTitle}>Back-End</h2>
                                <div className={styles.cardItem}>
                                    <p className={`${styles.items} ${styles.node}`}>Node Js</p>
                                    <p className={`${styles.items} ${styles.express}`}>Express Js</p>
                                    <p className={`${styles.items} ${styles.next}`}>Next Auth</p>
                                </div>
                            </div>

                            <div className={styles.cards}>
                                <h2 className={styles.skillTitle}>Database</h2>
                                <div className={styles.cardItem}>
                                    <p className={`${styles.items} ${styles.mongo}`}>Mongo DB</p>
                                    <p className={`${styles.items} ${styles.sql}`}>MySQL</p>
                                </div>
                            </div>

                            <div className={styles.cards}>
                                <h2 className={styles.skillTitle}>Other</h2>
                                <div className={styles.cardItem}>
                                    <p className={`${styles.items} ${styles.git}`}>Git</p>
                                    <p className={`${styles.items} ${styles.photoshop}`}>Adobe Photoshop</p>
                                    <p className={`${styles.items} ${styles.illustrator}`}>Adobe Illustrator</p>
                                    <p className={`${styles.items} ${styles.pro}`}>Adobe Premiere Pro</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </PaperWrapper>
        </div>
    )
}

export default About