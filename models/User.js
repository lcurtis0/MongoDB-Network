

const { Schema, Types, default: mongoose, model } = require('mongoose');

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
        thoughts: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Thought'
        }],

        friends: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }],
    });

    const User = model('User', userSchema);

module.exports = User;
