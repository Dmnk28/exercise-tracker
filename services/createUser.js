import User from '../models/user.js';
import { nanoid } from 'nanoid';

// const { nanoid } = require('nanoid');
// const User = require('../models/user');

const createUser = async (nameToGive) => {
    const user = await new User({
        username: nameToGive,
        _id: nanoid()
    });
    user.save();
    return {
        username: user.username,
        _id: user._id
    }
}

export default createUser;