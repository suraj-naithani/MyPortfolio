"use client";
import Image from 'next/image';
import React from 'react';
import styles from './card.module.css';
import { useRouter } from 'next/navigation';
import PaperWrapper from '../../../app/paper-wrapper';

const Card = ({ allData }) => {
    const router = useRouter();
    return (
        <>
            {
                allData?.map((item) => (
                    <PaperWrapper key={item._id} >
                        <div className={styles.data} >
                                <Image src={item.img} alt="image" className={styles.img} width={300} height={200} />
                            <div className={styles.card}>
                                <p className={styles.cardTitle}>{item.title}</p>
                                <p className={styles.cardLang}>{item.language}</p>
                                <div className={styles.buttons}>
                                    <button className={styles.links} onClick={() => router.push(item.demoLink)}>Demo</button>
                                    <button className={styles.links} onClick={() => router.push(item.codeLink)}>Code</button>
                                </div>
                            </div>
                        </div>
                    </PaperWrapper>
                ))
            }
        </>
    )
}

export default Card
