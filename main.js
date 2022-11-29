// import { faker } from "@faker-js/faker";
const { faker } = require("@faker-js/faker");
const fs = require("fs");

const createRandomUser = () => {
  faker.setLocale("fa");
  const users = [];
  for (let index = 0; index < 1000; index++) {
    users.push({
      id: +faker.random.numeric(8),
      email: faker.internet.email(),
      mobile: faker.phone.number(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      jobTitle: faker.name.jobTitle(),
      gender: 1,
      birthDate: faker.date.birthdate(),
      province: {
        code: 0,
        name: faker.address.country(),
      },
      city: {
        code: 0,
        name: faker.address.cityName(),
      },
      isBlocked: faker.datatype.boolean(),
      isAgahiContact: faker.datatype.boolean(),
    });
  }
  fs.writeFile("contacts.json", JSON.stringify(users), function (err) {
    if (err) return console.log(err);
    console.log("Hello World > helloworld.txt");
  });
  console.log(users);
};

createRandomUser();
