import mongoose,{Document, Schema} from 'mongoose';

export interface IUser extends Document{
  email: string,
  password: string,
  firstName: string,
  lastName: string
}

const userSchema: Schema<IUser> = new Schema({
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
    },
    {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
})

var User = mongoose.model('User', userSchema);

export default User;