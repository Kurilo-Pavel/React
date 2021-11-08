import {getUsers} from "../api/api.js";

const arrayUsers = (async () => {
    const users = await getUsers();
    users.sort((a, b) => Date.parse(a.birthDay) > Date.parse(b.birthDay) ? 1 : -1);
    console.log("Самый молодой пользователь :");
    console.log(users[0]);
    console.log("Самый старый пользователь :");
    console.log(users[users.length - 1]);
});
export {arrayUsers};