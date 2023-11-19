"use client";
import React, { useState, useEffect } from 'react'
import styles from "./portfolioCard.module.css"
import Loading from '../../../app/Loading';
import Card from '../card/Card';

const PortfolioCard = ({ data }) => {
    const [allData, setAllData] = useState(data);
    const [active, setActive] = useState("All");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [data, active]);

    const filterHandle = (category) => {
        setActive(category);
        if (category === "All") {
            setAllData(data);
        } else {
            const filteredData = data.filter(item => item.language === category);
            setAllData(filteredData);
        }
        setLoading(false);
    }

    return (
        <>
            <div className={styles.filters}>
                <div className={`${styles.filter} ${active === "All" ? styles.active : ""}`} onClick={() => filterHandle('All')}>All</div>
                <div className={`${styles.filter} ${active === "React JS" ? styles.active : ""}`} onClick={() => filterHandle('React JS')}>React JS</div>
                <div className={`${styles.filter} ${active === "Next JS" ? styles.active : ""}`} onClick={() => filterHandle('Next JS')}>Next JS</div>
                <div className={`${styles.filter} ${active === "Web Design" ? styles.active : ""}`} onClick={() => filterHandle('Web Design')}>Web Design</div>
                <div className={`${styles.filter} ${active === "Full Stack" ? styles.active : ""}`} onClick={() => filterHandle('Full Stack')}>Full Stack</div>
            </div>
            {
                loading ? (
                    <Loading />
                ) : (
                    <div className={styles.cards}>
                        <Card allData={allData} />
                    </div>
                )
            }
        </>
    )
}

export default PortfolioCard;