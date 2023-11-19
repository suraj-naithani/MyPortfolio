import React from 'react'
import styles from "./page.module.css"
import { AiFillPhone } from 'react-icons/ai';
import { MdLocationPin, MdEmail } from "react-icons/md";
import Link from 'next/link';
import ContactForm from '../../component/client/contactform/ContactForm';
import PaperWrapper from '../paper-wrapper';

export const metadata = {
  title: 'Contact Us - Get in Touch with Our Team',
  description: "Reach out to us through our contact page. Whether you have questions, feedback, or collaboration inquiries, we're here to listen. Let's connect and start a conversation today!",
};

const Contact = () => {
  return (
    <PaperWrapper>
      <div className={styles.container}>
        <h1 className={styles.title}>Contact Me</h1>
        <div className={styles.contact}>
          <section className={styles.details}>
            <p className={styles.contactTitle}>Lets work together!</p>
            <div className={styles.contactDetails}>
              <div className={styles.contact_section}>
                <Link href="tel:9045986868" className={styles.link}>
                  <div className={styles.icons}>
                    <AiFillPhone className={styles.icon} />
                    <p className={styles.detailHeading}>Phone</p>
                  </div>
                  <p className={styles.desc}>(+91) 9045986868</p>
                </Link>
              </div>
              <div className={styles.contact_section}>
                <Link href="mailto:" className={styles.link}>
                  <div className={styles.icons}>
                    <MdEmail className={styles.icon} />
                    <p className={styles.detailHeading}>Email</p>
                  </div>
                  <p className={styles.desc}>surajnathani4@gmail.com</p>
                </Link>
              </div>
              <div className={styles.contact_section}>
                <Link href="https://goo.gl/maps/9abiYEk1r9SZ544F9" target='_blank' className={styles.link}>
                  <div className={styles.icons}>
                    <MdLocationPin className={styles.icon} />
                    <p className={styles.detailHeading}>Address</p>
                  </div>
                  <p className={styles.desc}>shubhas nagar, clement town, dehradun</p>
                </Link>
              </div>
            </div>
          </section>

          <ContactForm className={styles.contactForm} />
        </div>
      </div>
    </PaperWrapper>
  )
}

export default Contact