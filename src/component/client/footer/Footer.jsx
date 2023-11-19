import styles from "./footer.module.css"
import { BsDiscord } from 'react-icons/bs'
import Link from 'next/link';
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.top}>
          <p>Check out my:</p>
          <div className={styles.social}>
            <div>
              <Link href="https://github.com/Surajnathani" target='_blank' className={styles.icon}>
                <AiOutlineGithub />
              </Link>
            </div>
            <div>
              <Link href="https://www.instagram.com/suraj_naithani_/" target='_blank' className={styles.icon}>
                <AiOutlineInstagram />
              </Link>
            </div>
            <div>
              <Link href="https://discordapp.com/users/1051375764370636891" target='_blank' className={styles.icon}>
                <BsDiscord />
              </Link>
            </div>
            <div>
              <Link href="https://www.linkedin.com/in/suraj-nathani-57b007217/" target='_blank' className={styles.icon}>
                <AiOutlineLinkedin />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Footer