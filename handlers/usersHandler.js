import createUser from '../services/createUser.js';
// const createUser = require("../services/createUser");

const usersHandler = async (req, res) => {
    const result = await createUser(req.body.username);

    res.json(result);
}

// module.exports = usersHandler;
export default usersHandler