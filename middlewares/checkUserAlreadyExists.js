import findUserByName from "../services/findUserByName.js";

const checkUserAlreadyExists = async (req, res, next) => {
    const user = await findUserByName(req.body.username);
    if (user) {
        return res.json({
            username: user.username,
            _id:      user._id
        });
    } else {
        next();
    }
}

export default checkUserAlreadyExists;