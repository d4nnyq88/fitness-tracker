const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [{
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
                required: "Enter a weight amount",
                default: 0
            },
            reps: {
                type: Number,
                required: "Enter number of reps",
                default: 0
            },
            sets: {
                type: Number,
                required: "Enter number of sets",
                default: 0
            },
            distance: {
                type: Number,
                default: 0
            }
        }]
    }, 
    {// include virtual properties
        toJSON: {            
            virtuals: true
        }
    }
);

WorkoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;