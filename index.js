import fetch from 'node-fetch'

// const numberUsers = 1;
const updateNumberUsers = 5;
const deleteNumberUsers = 5;
const replaceNumberUsers = 5;
const numberUsers = random(10, 30);
const apiBase = 'http://localhost:3000';
const name = ['Jayne', 'Nikita', 'Elise', 'Lew', 'Hayden', 'Presley', 'Dallas', 'Meghan', 'Carmen', 'Veronika']
const surName = ['Petrov', 'Ivanov', 'Backer', 'Arnold', 'Barnes', 'Cramer', 'Daniels', 'Carter', 'Ford', 'Faber']

function randomName(arr) {
  return Math.floor(Math.random() * (arr.length))
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomDate(startAge, endAge) {
  const start = startAge * 31536000000;
  const end = (endAge + 1) * 31536000000;
  const age = random(start, end);
  const date = new Date;
  date.setTime(date.getTime() - age)

  return date.toDateString()
}


const Endpoints = {
  users: '/users',
};
const getUsers = async () => {
  const response = await fetch(`${apiBase}${Endpoints.users}`);
  return await response.json();
};
// Add 10-30 random users
const addUser = async (user) => {
  const newUserResponse = await fetch(`${apiBase}${Endpoints.users}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json;charset=utf-8'},
    body: JSON.stringify(user),
  });

  return await newUserResponse.json();
};


const main = async () => {
  for (let i = 0; i < numberUsers; i++) {
    const user = {
      firstName: name[randomName(name)],
      surName: surName[randomName(surName)],
      birthDay: randomDate(13, 18)
    }
    console.log(await addUser(user));
  }
};

await main();
//=================================
//delete 5 random users
const arrayId = (async () => {
  const users = await getUsers()
  let array = [];
  users.forEach((user) => {
    array.push(user.id)
  })
  return array;
})

const deleteUser = async (id) => {
  const newUserResponse = await fetch(`${apiBase}${Endpoints.users + '/' + id}`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json;charset=utf-8'}
  });
}

for (let i = 0; i < deleteNumberUsers; i++) {
  const fullArray = await arrayId();
  const numberId = random(0, fullArray.length - 1);
  await deleteUser(fullArray[numberId])
}
//==============================
//show oldest and youngest users
const arrayUsers = (async () => {
  const users = await getUsers()
  users.sort((a, b) => Date.parse(a.birthDay) > Date.parse(b.birthDay) ? 1 : -1)
  console.log("Самый молодой пользователь :")
  console.log(users[0])
  console.log("Самый старый пользователь :")
  console.log(users[users.length - 1])
})
await arrayUsers()
//================================
//replace 5 random users to random users
const replaceUser = async (id, newUser) => {
  const newUserResponse = await fetch(`${apiBase}${Endpoints.users + '/' + id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json;charset=utf-8'},
    body: JSON.stringify(newUser),
  });
  return await newUserResponse.json();
};

const replace = async () => {
  const newUser = {
    firstName: name[randomName(name)],
    surName: surName[randomName(surName)],
    birthDay: randomDate(13, 18)
  }
  const fullArray = await arrayId()
  const number = random(0, fullArray.length - 1);
  await replaceUser(fullArray[number], newUser);

};
for (let i = 0; i < replaceNumberUsers; i++) {
  await replace();
}
//========================================
//show oldest and youngest users
await arrayUsers()
//========================================
//update 5 random users (random field for each users)
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
  }
  const fullArray = await arrayId()
  const number = random(0, fullArray.length - 1);
  await updateUser(fullArray[number], newUserField);
};

for (let i = 0; i < updateNumberUsers; i++) {
  await update();
}
//=============================
//show oldest and youngest users
await arrayUsers()
//=============================
//list all users in alphabet order. sort by last name them by first name
const sortFirstName = async () => {
  const users = await getUsers()
  users.sort((a, b) => {
    return a.firstName.localeCompare(b.firstName, ['en'], {caseFirst: 'upper'})
  })
  console.log('Sort by FirstName')
  console.log(users)
}
await sortFirstName()
//=============================
const sortSurName = async () => {
  const users = await getUsers()
  users.sort((a, b) => {
    return a.surName.localeCompare(b.surName, ['en'],)
  })
  console.log('Sort by LastName')
  console.log(users)
}
await sortSurName()