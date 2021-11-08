import fetch from 'node-fetch';
import {random} from "../generation/date_generation.js";
import {apiBase, Endpoints} from "./api.js";
import {deleteNumberUsers} from "../index.js";
import {arrayId} from "./api.js";

const delUser = async (id) => {
    const newUserResponse = await fetch(`${apiBase}${Endpoints.users + '/' + id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json;charset=utf-8'}
    });
};
const deleteUsers = async () => {
    for (let i = 0; i < deleteNumberUsers; i++) {
        const fullArray = await arrayId();
        const numberId = random(0, fullArray.length - 1);
        await delUser(fullArray[numberId]);
    }
};
export {deleteUsers};