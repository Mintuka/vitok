import mongoose,{Schema} from 'mongoose';

const likeSchema = new mongoose.Schema({
    userId: [String],
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Like = mongoose.model('Like', likeSchema);

export default Like;