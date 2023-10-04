

const { Schema, Types } = require('mongoose');

// ^^^ come back to this 

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            default: () => new Types.ObjectId(),
            // Needs trimmed 
        },
        email: {
            type: String,
            required: true,
            unique: true,
            $match: {
                $expr:
                    { /*< aggregation expression>*/ },
                // Needs Mongoose's matching validation for email
            },
        },
        //default: 'Unnamed assignment',
        thoughts: [{
            type: mongoose.Schema.Types.ThoughtId,
            ref: 'Thought'
            // If wrong refer to activity 7
        }],

        friends: [{
            type: mongoose.Schema.Types.UserId,
            ref: 'User'
        }],
    });

    const User = model('User', userSchema);

module.exports = userSchema;
