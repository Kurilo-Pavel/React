import {random} from "./date_generation.js";

const name = ['Jayne', 'Nikita', 'Elise', 'Lew', 'Hayden', 'Presley', 'Dallas', 'Meghan', 'Carmen', 'Veronika'];
const surName = ['Petrov', 'Ivanov', 'Backer', 'Arnold', 'Barnes', 'Cramer', 'Daniels', 'Carter', 'Ford', 'Faber'];

const firstName = () => name[random(0, name.length - 1)];
const lastName = () => surName[random(0, surName.length - 1)];

export {firstName, lastName};