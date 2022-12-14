

const users = [
    {"id": 1, "name": "Victor"},
    {"id": 2, "name": "Dima"},
    {"id": 3, "name": "Stas"}
]
const getUsers = () =>{
    return users
}
const addUser = (name) =>{
    users.push({id: new Date().getTime(), name: name});
}

exports.getUsers = getUsers
exports.addUser = addUser
