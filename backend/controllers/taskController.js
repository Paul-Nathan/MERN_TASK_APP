const Task = require("../models/taskModel");

const createTask = async (req, res) => {
    try {
        const tasks = await Task.create(req.body)
        res.status(200).json(tasks)
        // console.log(req.body);
        // res.send("Task Created")
        
       } catch (error) {
        res.status(500).json({error: error.message})
       }
}
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks); 
       } catch (error) {
        res.status(500).json({msg: error.message})
       }
}




module.exports = {
    createTask, getTasks
}
 
