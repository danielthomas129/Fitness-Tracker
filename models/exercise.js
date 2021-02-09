const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  sets: {
    type: Number,
    required: true
    
},{ toJSON: { virtuals: true }} );

WorkoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise)=>{
        return total + exercise.duration
    },0);
})

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
