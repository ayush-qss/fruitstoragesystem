const errorNames = {
    NameRequired: 'NameRequired',
    AllFieldsRequired: 'AllFieldsRequired',
    DescriptionLimit: "DescriptionLimit",
    FruitExists: "FruitExists",
}

const errorMessages = {
    NameRequired: { message: 'Name is required', statusCode: 400 },
    AllFieldsRequired: { message: 'All fields are required', statusCode: 400 },
    DescriptionLimit: { message: "Description must be less than 30 letters", statusCode: 400 },
    FruitExists: { message: "Fruit Name already exists", statusCode: 400 },
    ServerError: { message: "Internal Server Error", statusCode: 500 },
}

const getErrorMessage = (errorName) => {
    return errorMessages[errorName] || errorMessages.ServerError;
}

module.exports = { errorNames, getErrorMessage, errorMessages };