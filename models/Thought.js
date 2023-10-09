const { Schema, model, default: mongoose } = require('mongoose');
const reactionSchema = require('./Reaction');
const { timeStamp } = require('console');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: timeStamp, //  timestamps: true or  
      required: true,
      max_length: 50,
    },
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    reactions: [reactionSchema], //These are like replies
    /*reatctions: [{
        type: mongoose.Schema.Types.ThoughtId,
        ref: 'Thought'
        // If wrong refer to activity 7
    }]*/
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

//Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query

const Thought = model('thought', thoughtSchema);

module.exports = Thought;