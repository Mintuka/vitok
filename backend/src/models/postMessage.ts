import mongoose,{Schema} from 'mongoose';

const postSchema = new mongoose.Schema({
    title: String,
    message: String,
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Schema.Types.ObjectId,
        ref: 'Like'
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;