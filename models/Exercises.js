const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        required: "Enter a name for workout"
    },
    type: {
        type: String,
        required: "Select a type"
    },
    duration: {
        type: Number,
        required: "Enter a duration"
    },
    weight: {
        type: Number,
        required: "Enter a weight amount"
    },
    reps: {
        type: Number,
        required: "Enter number of reps"
    },
    sets: {
        type: Number,
        required: "Enter number of sets"
    }
});

const Exercises = mongoose.model("Exercises", ExerciseSchema);

module.exports = Exercises;