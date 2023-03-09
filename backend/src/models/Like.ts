import mongoose,{Schema} from 'mongoose';

const likeSchema = new mongoose.Schema({
    userId:{
        type: Array<String>,
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Like = mongoose.model('Like', likeSchema);

export default Like;