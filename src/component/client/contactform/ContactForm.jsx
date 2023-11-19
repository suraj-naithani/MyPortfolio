'use client';

import React, { useEffect, useState } from 'react'
import styles from "./contactform.module.css"

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        username: "",
        email: "",
        message: "",
    })

    const [status, setStatus] = useState(null);


    useEffect(() => {
        const timer = setTimeout(() => {
            setStatus(false);
        }, 5000);

        return () => clearTimeout(timer);
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch(`/api/contact/add`,
                {
                    method: 'POST',
                    headers: { "Content_Type": "application/json" },
                    body: JSON.stringify({
                        username: user.username,
                        email: user.email,
                        message: user.message
                    })
                })
            // console.log(response);
            if (response.status === 200) {
                setUser({
                    username: "",
                    email: "",
                    message: ""
                })
                setStatus('success');
                setLoading(false);
            } else {
                setStatus('error');
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.contactTitle}>Send a message</h1>
            <div className={styles.inputs}>
                <label htmlFor="username" className={styles.desc}>Your Name</label>
                <input type="text" id='username' className={styles.input} placeholder="username" name="username" value={user.username} onChange={handleChange} autoComplete='off' required />
            </div>
            <div className={styles.inputs}>
                <label htmlFor="email" className={styles.desc}>Your Email</label>
                <input type="email" id='email' className={styles.input} placeholder="email@address.com" name="email" value={user.email} onChange={handleChange} autoComplete='off' required />
            </div>
            <div className={styles.inputs}>
                <label htmlFor="description" className={styles.desc}>Your Description</label>
                <textarea name="message" rows={8}
                    id='description'
                    className={styles.textarea}
                    value={user.message}
                    onChange={handleChange}
                    placeholder="Enter your Message"
                    required
                    autoComplete="off"
                />
            </div>

            {
                loading ? (
                    <p className={styles.wait}>wait a second</p>
                ) : (
                    <>
                        {status === 'success' && <p className={styles.success}> <span className={styles.successIcon}>✓</span> Thank you for your message!</p>}
                        {status === 'error' && <p className={styles.error}><span className={styles.failIcon}>!</span> There was an error submitting your message. Please try again.</p>}
                    </>
                )
            }
            <button type="submit" className={styles.button}>Send Message</button>
        </form>
    )
}

export default ContactForm