
const router = require('express').Router();
const {

    // Need to change this VVVVVV
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,

  addThought,
  removeThought,

  getFriends,
  createFriend,
  removeFriend

} = require('../../controllers/UserController');

// GET all users
// /api/Users
router.route('/').get(getUsers) /*.post(createUser) */;

// GET a single user by its _id ...
// /api/Users/:UserId
router.route('/:UserId').get(getSingleUser).delete(deleteUser);

// and populated thought and friend data
// /api/Users/:UserId/Thoughts
router.route('/:UserId/Thoughts').post(addThought);

// --------------------------------------------------------------------
// /api/Users/:UserId/Thoughts/:ThoughtId
router.route('/:UserId/Thoughts/:ThoughtId').delete(removeThought);
// --------------------------------------------------------------------


// POST a new user:

router.route('/').get(getUsers).post(createUser);

// /api/users/:userId/friends/:friendId

router.route('/:userId/friends/:friendId').get(getFriends);

// POST to add a new friend to a user's friend list

router.route('/:userId/friends').get(getFriends).post(createFriend);

// DELETE to remove a friend from a user's friend list

router.route('/:userId/friends/:friendId').remove(removeFriend);

module.exports = router;