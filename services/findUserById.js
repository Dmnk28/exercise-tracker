import User from '../models/user.js';

const findUserById = async (idToFind) => {
    const user = await User.findById({ _id: idToFind });
    return user;
}

export default findUserById;