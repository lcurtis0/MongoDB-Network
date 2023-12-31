

const router = require('express').Router();
const {
    getThoughts,
    addThought,
    getSingleThought,
    removeThought,
    updateThought
  
} = require('../../controllers/thoughtController');
const { getUsers, getSingleUser } = require('../../controllers/userController');
 // /api/thoughts
 // GET to get all thoughts

 router.route('/').get(getUsers) /*.post(createUser) */;

// GET to get a single thought by its _id

router.route('/:UserId').get(getSingleUser) /*.delete(removeUser)*/

// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

router.route('/:UserId').get(getThoughts).post(addThought);

module.exports = router;

// DELETE to pull and remove a reaction by the reaction's reactionId value
// This is a bonus so not to worry right now


// Example -------------------------------------------------------

// const router = require('express').Router();
// const {
//   getCourses,
//   getSingleCourse,
//   createCourse,
//   updateCourse,
//   deleteCourse,
// } = require('../../controllers/courseController.js');

// // /api/courses
// router.route('/').get(getCourses).post(createCourse);

// // /api/courses/:courseId
// router
//   .route('/:courseId')
//   .get(getSingleCourse)
//   .put(updateCourse)
//   .delete(deleteCourse);

// module.exports = router;

// ------------------------------------------------------------------------------