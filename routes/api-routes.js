const Workout = require("../models/workout.js");

module.exports = function(app) {
    app.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkout => {
        res.json(dbWorkout);
        })
        .catch(err => {
        res.status(400).json(err);
        });
    });

    app.post("/api/workouts/bulk", (req, res) => {
    Workout.insertMany(body)
        .then(dbWorkout => {
        res.json(dbWorkout);
        })
        .catch(err => {
        res.status(400).json(err);
        });
    });
    app.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id,
     {$push: {exercises: req.body}},
    {new: true, runValidators: true})   
        .then(data => res.json(data))
        .catch(err => {
        console.log("error", err);
        res.json(err);

          });

    });

    app.get("/api/workouts", (req, res) => {
    Workout.find({}).then(data => res.json(data))
        .catch(err => {
            console.log("error", err);

            res.json(err);

          });

    });   
    app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
        res.json(dbWorkout);
        })
        .catch(err => {
        res.status(400).json(err);
        });
    });
}
