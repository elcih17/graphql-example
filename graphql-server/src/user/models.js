import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ''
  },
  age: {
    type: Number,
    default: 0
  }
});

mongoose.connect('mongodb://localhost/local', {
  useMongoClient: true
});

export default mongoose.model('User',UserSchema);
