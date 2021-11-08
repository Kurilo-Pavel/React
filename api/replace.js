import fetch from "node-fetch";
import {user} from "../generation/user_generation.js";
import {random} from "../generation/date_generation.js";
import {apiBase, Endpoints, arrayId} from "./api.js";
import {replaceNumberUsers} from "../index.js";

const replaceUser = async (id, newUser) => {
    const newUserResponse = await fetch(`${apiBase}${Endpoints.users + '/' + id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(newUser),
    });
    return await newUserResponse.json();
};

const replace = async () => {
    const newUser = user();
    const fullArray = await arrayId();
    const number = random(0, fullArray.length - 1);
    await replaceUser(fullArray[number], newUser);
};
const replaceUsers = async () => {
    for (let i = 0; i < replaceNumberUsers; i++) {
        await replace();
    }
    ;
};
export {replaceUsers};