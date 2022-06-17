import User from '../models/user.js';

const findUserById = async (idToFind) => {
    const user = await User.findOne({ _id: idToFind });
    return user;
}

export default findUserById;