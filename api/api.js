import fetch from 'node-fetch';

const apiBase = 'http://localhost:3000';
const Endpoints = {
    users: '/users',
};
const getUsers = async () => {
    const response = await fetch(`${apiBase}${Endpoints.users}`);
    return await response.json();
};

const arrayId = (async () => {
    const users = await getUsers();
    let array = [];
    users.forEach((user) => {
        array.push(user.id);
    });
    return array;
});

export {apiBase, Endpoints, getUsers, arrayId};