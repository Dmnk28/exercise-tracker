import User from '../models/user.js';

const findUserByName = async (nameToFind) => {
    const user = await User.findOne({ username: nameToFind });
    return user;
}

export default findUserByName;