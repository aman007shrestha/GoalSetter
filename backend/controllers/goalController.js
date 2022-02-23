const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');

// @desc Get goals
// @route Get request /api/goals
// @access Private

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  console.log(req.body);
  res.status(200).json(goals);
});
// @desc set goals
// @route post request /api/goals
// @access Private

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});
// @desc update goals
// @route Put request /api/goals/:id
// @access Private

const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(404);
    throw new Error('Goal Not FOund');
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});
// @desc Delete goals
// @route delete request /api/goals/:id
// @access Private

const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error('Delete Object Not found');
  }
  await goal.remove();
  // const deletedGoal = await Goal.findByIdAndDelete(req.params.id, () => {
  //   console.log('Object Deleted');
  // });
  res.status(200).json({
    id: req.params.id,
  });
});
module.exports = { getGoals, setGoals, updateGoals, deleteGoals };
