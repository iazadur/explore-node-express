const mongoose = require('mongoose')
const Workout = require('../modals/workoutModel')



// Get single workout 
const getAllWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 })
    res.status(200).json(workouts)
}


// Get single workout 
const getSingleWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such workout" })
    }
    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({ error: "No such workout" })
    }


    res.status(200).json(workout)
}


// Create Workout 
const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body
    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}



// Get single workout 
const deleteWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such workout" })
    }
    const workout = await Workout.findOneAndDelete({ _id: id })

    if (!workout) {
        return res.status(404).json({ error: "No such workout" })
    }


    res.status(200).json(workout)
}



// Update workout 
const updateWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such workout" })
    }
    const workout = await Workout.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!workout) {
        return res.status(404).json({ error: "No such workout" })
    }


    res.status(200).json(workout)
}






module.exports = {
    getAllWorkouts,
    getSingleWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}