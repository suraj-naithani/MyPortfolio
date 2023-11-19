'use client';

import React from 'react'
import FormControls from '../formControls/FormControls';
import styles from '../formControls/formControl.module.css'

const controls = [
    {
        name: "username",
        placeholder: "Enter User name",
        type: "text",
        label: "Enter User name",
    },
    {
        name: "password",
        placeholder: "Enter Password",
        type: "password",
        label: "Enter Password",
    },
];

const Login = ({ formData, setFormData, handleLogin }) => {
    return (
        <div>
            <div className={styles.container}>
                <FormControls
                    controls={controls}
                    formData={formData}
                    setFormData={setFormData}
                />
                <button
                    onClick={handleLogin}
                    className={styles.btn}
                >
                    Login
                </button>
            </div>
        </div>
    )
}

export default Login