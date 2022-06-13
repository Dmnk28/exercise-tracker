import createExercise from "../services/updateExerciseLog.js";

const exerciseHandler = async (req, res) => {
    const exercise = await createExercise(req.body.userId, req.body.description, req.body.duration, req.body.date);
    console.log(req.body.date)
    if (exercise) {
        return res.json(exercise);
    } else {
        return console.log('Please check your UserID. This one is not known to the Database.');
    }
}

export default exerciseHandler;