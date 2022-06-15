import User from "../models/user.js";

/**
 * Saves the Exercise in the Users Log if the User-ID is known to the database. Elsewise it returns false.
 * @param {*} userId ID of user that did the exercise
 * @param {*} descriptionToStore Description of the Exercise
 * @param {*} durationToStore Duration of the Exercise
 * @param {*} dateToStore Date of the Exercise
 * @returns Exercise-Object or false
 */
const updateExerciseLog = async (userId, descriptionToStore, durationToStore, dateToStore) => {
    const exercise = {
        description: descriptionToStore,
        duration: durationToStore,
        date: dateToStore.toUTCString(),
    };

    const user = await User.findById({_id: userId});
    if (user) {
        user.log.push(exercise)
        user.save();
        return {
            username: user.username,
            desciption: exercise.description,
            duration: exercise.duration,
            date: new Date(exercise.date).toDateString(),
            _id: user._id
        };
    } else {
        return false
    }
};

export default updateExerciseLog;