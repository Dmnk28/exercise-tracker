import findAllUsers from "../services/findAllUsers.js";

const displayAllUsersHandler = async (req, res) => {
    const users = await findAllUsers();
    res.send(users);
}

export default displayAllUsersHandler;