const express = require('express');
const ToDo = require('../models/ToDo');

const router = express.Router();

router.get('/', async (req, res)=>{
  try{
    let data = await ToDo.find();
    res.status(201).json(data);
  }catch(err){
    res.status(500).json(err);
  }
});
 
router.get('/:toDoTitle', async (req, res)=>{
  try{
    let data = await ToDo.findOne({title:req.params.toDoTitle});
    res.status(201).json(data);
  }catch(err){
    res.status(500).json(err);
  }
});

router.post('/', async (req, res)=>{
  try{

    let newToDo = new ToDo({
      title: req.body.title,
      date: req.body.date,
      description: req.body.description,
      finished: req.body.finished
    });

    let data = await newToDo.save();
    res.status(201).json(data);
  }catch(err){
    res.status(500).json(err);
  }
});

router.patch('/:toDoTitle', async (req, res)=>{
  try{
    let data = await ToDo.update({title:req.params.toDoTitle}, {
      title: req.body.title,
      date: req.body.date,
      description: req.body.description,
      finished: req.body.finished
    });

    res.status(201).json(data);
  }catch(err){
    res.status(500).json(err);
  }
});

router.delete('/:toDoTitle', async (req, res)=>{
  try{
    let data = await ToDo.remove({title:req.params.toDoTitle});
    res.status(201).json(data);
  }catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;