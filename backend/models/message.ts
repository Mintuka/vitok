import mongoose, { Schema, Document } from 'mongoose'

export interface IMessageDocument extends Document {
  title: String
  like: Number
  creator: String
  message: String
  tags: [String]
  selectedFile: String
}

const articleSchema: Schema<IMessageDocument> = new mongoose.Schema({
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

const Message = mongoose.model<IMessageDocument>('Message', articleSchema)

export default Message