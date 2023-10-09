const { Schema, model, default: mongoose } = require('mongoose');


const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 250,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),

        },
    },
    {
        // May need to re adjust becuase "Use a getter method to format the timestamp on query"
        // This doesn't look right
        timestamps: true,
        toJSON: {
            getter: true,
            virtuals: true,
        },
    }

);

//This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.

//const Reaction = model('reaction', reactionSchema);

//module.exports = Reaction;
