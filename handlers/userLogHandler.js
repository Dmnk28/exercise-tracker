import findUserById from "../services/findUserById.js";

const userLogHandler = async (req, res) => {
    const user = await findUserById(req.params._id);
    if (req.query.from) {
        const fromDate = new Date(req.query.from);
        user.log = user.log.filter(data => {
            const dateToCompare = new Date(data.date);
            return dateToCompare >= fromDate;
        });
    }
    if (req.query.to) {
        const toDate = new Date(req.query.to);
        user.log = user.log.filter(data => {
            const dateToCompare = new Date(data.date);
            return dateToCompare <= toDate;
        });
    }
    if (req.query.limit) {
        const limit = req.query.limit;
        user.log.splice(limit);
    }
    
    return res.json({
        username: user.username,
        count: user.log.length,
        _id: user._id,
        log: user.log.map(data => {
            return {
                description: data.description,
                duration: data.duration,
                date: new Date(data.date).toDateString()    // Needed, due to calculations beeing more accurate in UTC only and FCC-Task to use toDateString()
            }
        })
    });
}

export default userLogHandler;