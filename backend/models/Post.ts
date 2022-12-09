import mongoose, { Schema, Document } from 'mongoose'

export interface IPost extends Document {
  title: String
  like: Number
  creator: String
  message: String
  tags: [String]
  selectedFile: String
}

const articleSchema: Schema<IPost> = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    like: {
      type: Number
    },
    creator: {
        type: String,
        required: true
      },
    message: {
        type: String,
        required: true
    },
    selectedFile: {
        type: String,
        required: true
      },
    tags: {
        type: [String],
        required: true
    },
  },
    {
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
    }
)

const Post = mongoose.model<IPost>('Post', articleSchema)

export default Post