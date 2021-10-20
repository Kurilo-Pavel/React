const numberUsers = process.argv[2];
const apiBase = 'http:localhost:3000';

const Endpoints = {
  users: '/users',
};

class user {
  constructor() {
    this.firstName = name[randomName(name)]
    this.surName = surName[randomName(surName)]
    this.birdthDay = randomDate(13, 18)
  }
}

const name = ['Jayne', 'Nikita', 'Elise', 'Lew', 'Hayden', 'Presley', 'Dallas', 'Meghan', 'Carmen', 'Veronika']
const surName = ['Petrov', 'Ivanov', 'Backer', 'Arnold', 'Barnes', 'Cramer', 'Daniels', 'Carter', 'Ford', 'Faber']

function randomName(arr) {
  return Math.floor(Math.random() * (arr.length + 1))
}

function randomDate(startAge, endAge) {
  const start = startAge * 31536000000;
  const end = (endAge + 1) * 31536000000;
  const age = Math.floor(Math.random() * (end - start + 1) + start);
  const date = new Date;
  date.setTime(date.getTime() - age)
  return date.toLocaleDateString()
}

function createUser() {
  const user = new User();
  addUser(user);
};
const getUsers = async () => {
  const response = await fetch(`${apiBase}${Endpoints.user}`);
  const users = await response.json();
  return users;
};
const addUser = async (user) => {
  const newUserResponse = await fetch(`${apiBase}${Endpoints.users}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json;charset=utf-8'},
    body: JSON.stringify(user),
  });

  const result = await newUserResponse.json();
  return result;
};

const main = async () => {
  for (let i = 0; i < numberUsers; i++) {
    createUser()
  }
  console.log(await getUsers());
};

main().then();