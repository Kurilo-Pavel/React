import {getUsers} from "../api/api.js";

const sortFirstName = async () => {
    const users = await getUsers();
    users.sort((a, b) => {
        return a.firstName.localeCompare(b.firstName, ['en'], {caseFirst: 'upper'})
    });
    console.log('Sort by FirstName');
    console.log(users);
};
const sortSurName = async () => {
    const users = await getUsers();
    users.sort((a, b) => {
        return a.surName.localeCompare(b.surName, ['en'],)
    });
    console.log('Sort by LastName');
    console.log(users);
};
export {sortSurName, sortFirstName};