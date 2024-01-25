const options = {
    swaggerDefinition: {
        info: {
            title: "My APP API",
            description: "My API description",
            contact: {
                name: "My API",
            }
        },
    },
    apis: ["./src/routes/*.route.js"],
};

module.exports = options;