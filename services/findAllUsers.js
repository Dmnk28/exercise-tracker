import User from "../models/user.js";

const findAllUsers = async () => {
    const result = await User.find();
    return result;
}

export default findAllUsers;