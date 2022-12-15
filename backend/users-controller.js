let {getUsers, addUser} = require('./users-repository');


exports.usersController = async (request, response) => {
    if (request.method === "POST") {
        let res = await addUser( 'vic')
        response.write(JSON.stringify({success: true}))
        response.end()
    } else {
        let users = await getUsers()
        response.write(JSON.stringify(users))
        response.end()
    }
    // response.write(JSON.stringify(getUsers()))

}

