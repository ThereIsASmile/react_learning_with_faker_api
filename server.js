const express = require("express");
const { faker } = require('@faker-js/faker');

const app = express();

const port = 8000;



const createUser = () => {
    const newFakeUserObject = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        id: faker.datatype.uuid()  
    };
    return newFakeUserObject;
};
  
const newFakeUser = createUser();
console.log(newFakeUser);
/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */

const createCompany = () => {
    const newFakeCompanyObject = {
        id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),     
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return newFakeCompanyObject;
};
  
const newFakeCompany = createCompany();
console.log(newFakeCompany);


app.get("/api/users/new", (req, res) => {
    res.json( newFakeUser );
    });
    
app.get("/api/companies/new", (req, res) => {
    res.json( newFakeCompany );
    });

app.get("/api/user/company", (req, res) => {
    const userCompany = {
        newFakeUser,
        newFakeCompany
    }
    res.json( userCompany );

    });

app.listen( port, () => console.log(`Listening on port: ${port}`) );