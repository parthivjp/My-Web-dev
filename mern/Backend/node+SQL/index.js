// import { faker } from '@faker-js/faker';

const { faker } = require('@faker-js/faker');
const  mysql  = require('mysql2');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "deta_app",
  password: "P@rthiv9299"
});

try {

  connection.query("SHOW TABLES", (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (err) {
  console.log(err);
}

connection.end();

let getRandomUser = () => {
  return {
    Id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    // avatar: faker.image.avatar(),
    password: faker.internet.password(),
    // birthdate: faker.date.birthdate(),
    // registeredAt: faker.date.past(),
  };
}
// console.log(getRandomUser());