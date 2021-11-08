import {random} from "./generation/date_generation.js";
import {addUsers} from "./api/add.js";
import {deleteUsers} from "./api/delete.js";
import {arrayUsers} from "./sorting/young_old_users.js";
import {replaceUsers} from "./api/replace.js";
import {updateUsers} from "./api/update.js";
import {sortSurName, sortFirstName} from "./sorting/sort.js";

const updateNumberUsers = 5;
const deleteNumberUsers = 5;
const replaceNumberUsers = 5;
const numberUsers = random(10, 30);

await addUsers();
console.log('add 10 - 30 random users')
//delete 5 random users
await deleteUsers();
console.log('delete 5 random users')
//show oldest and youngest users
await arrayUsers();
//replace 5 random users to random users
await replaceUsers();
console.log('replace 5 random users to random users')
//show oldest and youngest users
await arrayUsers();
//update 5 random users (random field for each users)
await updateUsers();
console.log('update 5 random users (random field for each users)')
//show oldest and youngest users
await arrayUsers();
//list all users in alphabet order. sort by last name them by first name
await sortFirstName();
await sortSurName();

export {numberUsers,deleteNumberUsers, replaceNumberUsers, updateNumberUsers};