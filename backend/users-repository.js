// const users.json = [
//     {"id": 1, "name": "Victor"},
//     {"id": 2, "name": "Dima"},
//     {"id": 3, "name": "Stas"}
// ]


const {readJsonFromFile, writeJsonFromFile} = require('./fs-utils');
const fs = require("fs");

const getUsers = () =>{
   return  readJsonFromFile('./users.json')
}
const addUser = async (name) =>{
    let users = await getUsers()
    users.push({name: name});
    return writeJsonFromFile('./users.json', users)
}

exports.getUsers = getUsers
exports.addUser = addUser
