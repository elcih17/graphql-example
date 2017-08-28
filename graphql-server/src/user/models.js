import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    default: ''
  },
  age: {
    type: Number,
    default: 0
  },
});

mongoose.connect('mongodb://localhost/local');

export default mongoose.model('User', UserSchema);
