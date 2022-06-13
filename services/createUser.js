import User from '../models/user.js';
// import { nanoid } from 'nanoid';

const createUser = async (nameToGive) => {
    const user = await new User({
        username: nameToGive
    });
    user.save();
    return {
        username: user.username,
        _id: user._id
    }
}

export default createUser;