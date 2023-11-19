import React from 'react'

import styles from './formControl.module.css'

const FormControls = ({ controls, formData, setFormData }) => {
    return (
        <div className={styles.container}>
            {
                controls.map(controlItem => (
                    <div key={controlItem.id} className={styles.form}>
                        <label>{controlItem.label}</label>
                        <input
                            placeholder={controlItem.placeholder}
                            type={controlItem.type}
                            name={controlItem.name}
                            id={controlItem.name}
                            value={formData[controlItem.name]}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    [controlItem.name]: e.target.value,
                                });
                            }}
                            className={styles.input}
                        />
                    </div>)
                )
            }
        </div>
    )
}

export default FormControls