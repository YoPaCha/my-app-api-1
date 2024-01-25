const { faker } = require('@faker-js/faker');

function createRandomUser() {
    return {
        id: faker.string.uuid(),
        title: faker.lorem.lines(1),
        description: faker.lorem.lines(2),
        date: faker.date.past()
    };
}

const ARTICLES = faker.helpers.multiple(createRandomUser, {
    count: 10,
});

module.exports = { ARTICLES };