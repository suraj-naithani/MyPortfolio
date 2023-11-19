'use client';

import Link from 'next/link';
import FormControls from '../formControls/FormControls'
import styles from '../formControls/formControl.module.css'

const controls = [
    {
        name: "title",
        placeholder: "Enter a title",
        type: "text",
        label: "Enter a title",
    },
    {
        name: "language",
        placeholder: "Enter a language",
        type: "text",
        label: "Enter a language",
    },
    {
        name: "demoLink",
        placeholder: "Enter a Demo Link",
        type: "text",
        label: "Enter a Demo Link",
    },
    {
        name: "codeLink",
        placeholder: "Enter a Code Link",
        type: "text",
        label: "Enter a Code Link",
    },
    {
        name: "img",
        placeholder: "Enter a image Link",
        type: "text",
        label: "Enter a image Link",
    }
]

const AdminProjectView = ({ formData, setFormData, handleSaveData, data }) => {
    return (
        <div>
            <div className={styles.container}>
                {
                    data && data.length ? data.map(item => <div key={item._id} className={styles.data}>
                        <p>1. Title: {item.title}</p><br />
                        <p>2. Language: {item.language}</p><br />
                        <p>3. Demo Link: <Link href={item.demoLink}>{item.demoLink}</Link></p><br />
                        <p>4. Code Link: <Link href={item.codeLink}>{item.codeLink}</Link></p><br />
                        <p>5. Image Link: <Link href={item.img}>{item.img}</Link></p><br />
                    </div>
                    ) : null
                }
            </div>
            <div className={styles.container}>
                <FormControls
                    controls={controls}
                    formData={formData}
                    setFormData={setFormData}
                />
                <button className={styles.btn} onClick={() => handleSaveData('project')}>send</button>
            </div>
        </div>
    )
}

export default AdminProjectView