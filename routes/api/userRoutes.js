
const router = require('express').Router();
const {

  // Need to change this VVVVVV
  getUsers,
  getSingleUser,
  createUser,

  getFriends,
  createFriend,
  removeFriend,

} = require('../../controllers/userController');

// GET all users
// /api/Users
router.route('/').get(getUsers);

// GET a single user by its _id ...
// /api/Users/:UserId
router.route('/:UserId').get(getSingleUser);

// and populated thought and friend data
// /api/Users/:UserId/Thoughts
router.route('/:UserId').post(createUser);

// POST a new user:

router.route('/').get(getUsers).post(createUser);

// /api/users/:userId/friends/:friendId

router.route('/:userId/friends/:friendId').get(getFriends);

// POST to add a new friend to a user's friend list

router.route('/:userId/friends').get(getFriends).post(createFriend);

// DELETE to remove a friend from a user's friend list

router.route('/:userId/friends/:friendId').remove(removeFriend);

module.exports = router;