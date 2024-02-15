const express = require('express');
const router = express.Router();
const Task = require('./models/Task');

router.post('/create', async (req, res) => {
    try {
        const task = await Task.create({ ...req.body, completed: false });
        res.status(201).json(task);
    } catch (error) {
        console.error(error);
    }
});




router.get('/', async(req,res)=> {
try {
    const tasks = await Task.find()
    res.json(tasks)
}catch (error) {
    console.log (eror)
}

})


router.get('/id/:_id' , async(req, resp) => {
    try{

        const task = await Task.findById(req.params._id)
        res.json(task)

    } catch (error) {
    }
})


router.put('/maskAsCompleted/:id', async (req,res) => {
    try{
        const idTask = req.params.idTask
        const task = await Task.findbyIDandUpdate(
            idTask, {
                completed: true
            }
        )
    }catch{error()}


    })
};








module.exports = router;
