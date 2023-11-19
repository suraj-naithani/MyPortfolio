'use client';

import React, { useEffect, useState } from 'react'
import AdminProjectView from '../../component/admin/AdminProjectView/AdminProjectView';
import AdminContactView from '../../component/admin/AdminContactView/AdminContactView';
import styles from './admin.module.css';
import { addData, getData, login } from "../../controller/index";
import Login from '../../component/admin/login/Login'

const initialProjectFormData = {
    title: "",
    language: "",
    demoLink: "",
    codeLink: "",
    img: "",
}

const initialLoginFormData = {
    username: '',
    password: ''
}

const Admin = () => {
    const [currentSelectedTab, setCurrentSelectedTab] = useState('project');
    const [projectViewFormData, setProjectViewFormData] = useState(initialProjectFormData);
    const [allData, setAllData] = useState({})
    const [authUser, setAuthUser] = useState(false);
    const [loginFormData, setLoginFormData] = useState(initialLoginFormData)

    const menuItems = [
        {
            id: "project",
            label: "Project",
            component: (
                <AdminProjectView
                    formData={projectViewFormData}
                    setFormData={setProjectViewFormData}
                    handleSaveData={handleSaveData}
                    data={allData?.project}
                />
            ),

        },
        {
            id: "contact",
            label: "Contact",
            component: (
                <AdminContactView
                    data={allData?.contact}
                />
            ),
        }
    ];

    async function extractAllData() {
        const response = await getData(currentSelectedTab);

        if (response?.success) {
            setAllData({
                ...allData,
                [currentSelectedTab]: response && response.data,
            });
        }
    }

    async function handleSaveData() {
        const dataMap = {
            project: projectViewFormData,
        }

        const response = await addData(currentSelectedTab, dataMap[currentSelectedTab]);
        console.log(response);

        if (response.success) {
            resetFormData();
            extractAllData();
        }
    }

    useEffect(() => {
        extractAllData()
    }, [currentSelectedTab])

    function resetFormData() {
        setProjectViewFormData(initialProjectFormData);
    }

    useEffect(() => {
        setAuthUser(JSON.parse(sessionStorage.getItem("authUser")))
    }, [])

    async function handleLogin() {
        const res = await login(loginFormData);
        // console.log(res);

        if (res?.success) {
            setAuthUser(true);
            sessionStorage.setItem('authUser', JSON.stringify(true));
        }
    }

    if (!authUser) return <Login formData={loginFormData} handleLogin={handleLogin} setFormData={setLoginFormData} />

    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                {
                    menuItems.map((item) => (
                        <button key={item.id}
                            type='button'
                            className={styles.btn}
                            onClick={() => {
                                setCurrentSelectedTab(item.id)
                                resetFormData()
                            }}
                        >
                            {item.label}
                        </button>
                    ))
                }
                <button
                    onClick={() => {
                        setAuthUser(false);
                        sessionStorage.removeItem('authUser')
                    }}
                    className={styles.btn}
                >Logout</button>
            </nav>
            <div>
                {
                    menuItems.map(item => item.id === currentSelectedTab && item.component)
                }
            </div>
        </div >

    )
}

export default Admin