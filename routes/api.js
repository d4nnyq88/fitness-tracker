const router = require("express").Router();
const Workout = require("../models/Workout");

router.get("/workouts", (req, res) => {
    
    Workout.find({})
        .then(dbWorkout => {
            res.status(200).json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/workouts/range", (req, res) => {
    Workout.find({}).sort({day:-1}).limit(7)
        .then(dbWorkoutRange => {
            res.status(200).json(dbWorkoutRange);
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
    Workout.findByIdAndUpdate({
                _id: req.params.id
            }, {
                $push: {
                    exercises: req.body
                }                
            }, {new: true}
        )
        .then(dbUpdateWorkout => {
            res.status(200).json(dbUpdateWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;