import axios from 'axios';
const baseUrl = 'https://petstore.swagger.io/v2';

export const createUser = async (userData) => {
    const response = await axios.post(`${baseUrl}/user`, userData);
    return response;
}

export const getUser = async (userName) => {
    const response = await axios.get(`${baseUrl}/user/${userName}`)
    return response;
}

export const userLogin = async (login, password) => {
    const response = await axios.get(`${baseUrl}/user/login?username=${login}&password=${password}`);
    return response;
}

export const userLogout = async () => {
    const response = await axios.get(`${baseUrl}/user/logout`);
    return response;
}

export const createUserList = async (userData) => {
    const response = await axios.post(`${baseUrl}/user/createWithList`, userData);
    return response;
}

export const addNewPet = async (userData) => {
    const response = await axios.post(`${baseUrl}/pet`, userData);
    return response;
}

export const updatePet = async (userData) => {
    const response = await axios.put(`${baseUrl}/pet`, userData);
    return response;
}

export const deletePet = async (petId) => {
    const url = `${baseUrl}/pet/${petId}`;
    const response = await axios.delete(url);
    return response;
}