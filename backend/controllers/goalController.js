const asyncHandler = require('express-async-handler');

// @desc Get goals
// @route Get request /api/goals
// @access Private

const getGoals = asyncHandler(async (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: 'Get goals' });
});
// @desc set goals
// @route post request /api/goals
// @access Private

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  res.status(200).json({ message: 'set goals' });
});
// @desc update goals
// @route Put request /api/goals/:id
// @access Private

const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update goals ${req.params.id}` });
});
// @desc Delete goals
// @route delete request /api/goals/:id
// @access Private

const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete goals ${req.params.id}` });
});
module.exports = { getGoals, setGoals, updateGoals, deleteGoals };
