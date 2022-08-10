const express = require('express')
const {
    getAllWorkouts,
    createWorkout,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

// Get all workouts 
router.get('/', getAllWorkouts)

// Get a single workout 
router.get("/:id", getSingleWorkout)

// Post a new workout 
router.post("/", createWorkout)

// delete a  workout 
router.delete("/:id", deleteWorkout)

// Update a single workout 
router.patch("/:id", updateWorkout)

module.exports = router 