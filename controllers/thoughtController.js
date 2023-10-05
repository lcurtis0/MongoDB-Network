const { thought, User } = require('../models');

// This section is create any methods to use later 

module.exports = {
  // Get all thoughts
  async getthoughts(req, res) {
    try {
      const thoughts = await thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get a single thought
  async getSinglethought(req, res) {
    try {
      const thought = await thought.findOne({ _id: req.params.thoughtId })
        // This removes any dashes or spaces VVVVV
        .select('-__v');
        // may need populate

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a new thought
  async createthought(req, res) {
    try {
      const thought = await thought.create(req.body);

      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { posts: post._id } },
        { new: true }
      );

      // For is there is no user 
      if (!user) {
        return res
          .status(404)
          .json({ message: 'Post created, but found no user with that ID' });
      }
      
      res.json('A new thought created ' + thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Delete a thought
  async deletethought(req, res) {
    try {
      const thought = await thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }


      //This could be { $in: thought.Users } double check later
      await User.deleteMany({ _id: { $in: thought.username } });
      res.json({ message: 'thought and User deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a thought
  async updatethought(req, res) {
    try {
      const thought = await thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
