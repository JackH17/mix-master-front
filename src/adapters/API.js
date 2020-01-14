import axios from 'axios';
const DEV_API_URI_BASE = 'http://localhost:5000/api';

const constructHeaders = (moreHeaders = {}) => (
    {
        'Authorization': localStorage.getItem('token'),
        ...moreHeaders
    }
)

const validateUser = async () => {

    if (!localStorage.token) return Promise.resolve({ error: 'no token' })

    try{
        const res = await fetch(`${DEV_API_URI_BASE}/users/me`, { headers: constructHeaders() });
        const data = res.json();

        return data;

    } catch (error) {
        return error;
    }
}

const createUser = async (user) => {

    const rawData = await axios.post(`${DEV_API_URI_BASE}/users`, user)
    const jsonData = await rawData.data
    localStorage.setItem("token", jsonData.token);

    return jsonData;
};

const loginUser = async (user) => {


    try {

        const rawData = await axios.post(`${DEV_API_URI_BASE}/users/login`, user)
        const jsonData = await rawData.data
        localStorage.setItem("token", jsonData.token);
        return jsonData;

    } catch(err) {
        console.log(err)
    }
};

const logoutUser = async (user) => {

    const configOpt = {
        method: 'POST',
        headers: {
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }}

    try {

        const rawData = await fetch(`${DEV_API_URI_BASE}/users/logout`, configOpt, user)
        localStorage.clear();
        console.log(rawData);
        return rawData

    } catch(err) {
        console.log(err)
    }
}

const getProjects = async () => {

    try {
        const res = await fetch(`${DEV_API_URI_BASE}/projects`, { headers: constructHeaders() });
        const data = res.json();

        return data;

    } catch(err){
        console.log(err)
    }
};

const createProject = async (project) => {

    const configOpt = {
        method: 'POST',
        headers: {
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: `${project.name}`
        }) 
    }
    
      const rawData = await fetch(`${DEV_API_URI_BASE}/projects`, configOpt)
      const jsonData = await rawData.json();

      return jsonData;
};

const createTask = async (task) => {

    const configOpt = {
        method: 'POST',
        headers: {
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: `${task.name}`,
            project: `${task.projectID}`
        }) 
    };

    const rawData = await fetch(`${DEV_API_URI_BASE}/tasks`, configOpt)
    const jsonData = await rawData.json();

    return jsonData;
}

const createSession = async (session) => {

    const configOpt = {
        method: 'POST',
        headers: {
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body: JSON.stringify({
            project: `${session.projectID}`
        }) 
    };

    const rawData = await fetch(`${DEV_API_URI_BASE}/sessions`, configOpt)
    const jsonData = await rawData.json();

    return jsonData;

}

const deleteProject = async (id) => {
    console.log(id)

    const configOpt = {
        method: 'DELETE',
        headers: {
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }}

    const rawData = await fetch(`${DEV_API_URI_BASE}/projects/${id}`, configOpt)
    const jsonData = await rawData.json()

    return jsonData;
};

const getProject = async (id) => {

    try {
        const res = await fetch(`${DEV_API_URI_BASE}/projects/${id}`, { headers: constructHeaders() });
        const data = await res.json();

        return data;

    } catch(err){
        console.log(err)
    }
}

const getTasks = async () => {

    const configOpt = {
        method: 'GET',
        headers: {
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    };


    const res = await fetch(`${DEV_API_URI_BASE}/tasks`, configOpt);
    const data = res.json();

    return data;
}

const getSessions = async () => {

    const configOpt = {
        method: 'GET',
        headers: {
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    };


    const res = await fetch(`${DEV_API_URI_BASE}/sessions`, configOpt);
    const data = res.json();

    return data;
}

export default {
    createUser,
    validateUser,
    loginUser, 
    logoutUser, 
    getProjects,
    createProject,
    deleteProject,
    getProject,
    createTask,
    getTasks,
    createSession,
    getSessions
}