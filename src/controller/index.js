export async function addData(currentTab, formData) {
    try {
        const response = await fetch(`/api/${currentTab}/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
            cache: "no-store",
        });

        const result = await response.json();

        return result;
    } catch (e) {
        console.log(e);
    }
}

export async function getData(currentTab) {
    try {
        const response = await fetch(`/api/${currentTab}/get`, {
            method: "GET",
            cache: "no-store",
        });

        const result = await response.json();

        return result;
    } catch (e) {
        console.log(e);
    }
}


export async function extractAllData(currentTab) {
    try {
        const response = await fetch(`http://localhost:3000/api/${currentTab}/get`, {
            method: "GET",
            cache: "no-store",
        });

        const result = await response.json();

        return result && result.data;
    } catch (e) {
        console.log(e);
    }
}


export async function login(formData) {
    try {
        const response = await fetch(`/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();

        return result;
    } catch (e) {
        console.log(e);
    }
}