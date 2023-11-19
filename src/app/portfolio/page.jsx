import React from 'react'
import styles from "./page.module.css"
import PortfolioCard from "../../component/client/portfolioCard/PortfolioCard"
import { extractAllData } from '../../controller';

export const metadata = {
  title: 'Portfolio - Showcase of My Work and Projects',
  description: "Explore my portfolio showcasing a diverse range of web development projects, designs, and creative work. See how I've transformed ideas into digital realities and get inspired for your next project.",
};


const Portfolio = async () => {
  const projectSectionData = await extractAllData("project");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Portfolio</h1>
      <PortfolioCard data={projectSectionData} />
    </div>
  )
}

export default Portfolio