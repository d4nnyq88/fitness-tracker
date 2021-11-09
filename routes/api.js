const router = require("express").Router();
const Workout = require("../models/Workout");
const Exercises = require("../models/Exercises");

router.get("/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.status(200).json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


router.post("/workouts", ({
    body
}, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.status(200).json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/workouts/:id", (req, res) => {
    Workout.updateOne({
                _id: req.params.id
            }, {
                $push: {
                    exercises: req.body
                }
            }
        )
        .then(dbUpdateWorkout => {
            res.status(200).json(dbUpdateWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/exercise", (req, res) => {
    Exercises.find({})
        .then(dbExercise => {
            res.status(200).json(dbExercise);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post("/exercise", ({
    body
}, res) => {
    Exercises.create(body)
        .then(dbExercise => {
            res.status(200).json(dbExercise);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;