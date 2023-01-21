import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: String,
    password: String
    },
    {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
})

var User = mongoose.model('User', userSchema);

export default User;