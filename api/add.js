import fetch from "node-fetch";
import {apiBase, Endpoints} from "./api.js";
import {user} from "../generation/user_generation.js";
import{numberUsers} from "../index.js";

const addUser = async (user) => {
    const newUserResponse = await fetch(`${apiBase}${Endpoints.users}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(user),
    });

    return await newUserResponse.json();
};
const addUsers = async ()=>{
    for (let i = 0; i < numberUsers; i++) {
        console.log(await addUser(user()));
    };
}
export {addUsers};