import fetch from "node-fetch";
import {apiBase, Endpoints, arrayId} from "./api.js";
import {random, randomDate} from "../generation/date_generation.js";
import {updateNumberUsers} from "../index.js";

const updateUser = async (id, newUserField) => {
    const newUserResponse = await fetch(`${apiBase}${Endpoints.users + '/' + id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(newUserField),
    });
    return await newUserResponse.json();
};

const update = async () => {
    const newUserField = {
        birthDay: randomDate(13, 18)
    };
    const fullArray = await arrayId();
    const number = random(0, fullArray.length - 1);
    await updateUser(fullArray[number], newUserField);
};
const updateUsers = async () => {
    for (let i = 0; i < updateNumberUsers; i++) {
        await update();
    }
    ;
};
export {updateUsers};