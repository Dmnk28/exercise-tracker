import updateExerciseLog from "../services/updateExerciseLog.js";

const exerciseHandler = async (req, res) => {
    const exerciseDate = res.locals.date;
    const exercise = await updateExerciseLog(req.params._id, req.body.description, req.body.duration, exerciseDate);
    if (exercise) {
        res.json(exercise);  // exercise already contains information about the user
    } else {
        return console.log('Please check your UserID. This one is not known to the Database.');
    }
}

export default exerciseHandler;