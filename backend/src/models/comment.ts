import mongoose,{Schema} from 'mongoose';

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'PostMessage'
    }
    },
    {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

var Comment = mongoose.model('Comment', commentSchema);

export default Comment;