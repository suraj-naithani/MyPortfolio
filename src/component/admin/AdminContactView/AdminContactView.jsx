import React from 'react'
import styles from '../formControls/formControl.module.css'

const AdminContactView = ({ data }) => {
    return (
        <div>
            <div className={styles.container}>
                {
                    data && data.length ? data.map(item => <div key={item._id} className={styles.data}>
                        <p>1.Username: {item.username}</p><br />
                        <p>2.Email: {item.email}</p><br />
                        <p>3.Message: {item.message}</p><br />
                    </div>
                    ) : null
                }
            </div>
        </div>
    )
}

export default AdminContactView