import createUser from '../services/createUser.js';

const usersHandler = async (req, res) => {
    const result = await createUser(req.body.username);

    res.json(result);
}

export default usersHandler;