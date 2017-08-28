import mongoose from 'mongoose'

const Schema = mongoose.Schema

const PostSchema = new Schema({
  author_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  author_name: {
    type: String,
    ref: 'User',
  },
  title: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  }
});

mongoose.connect('mongodb://localhost/local');

export default mongoose.model('Post', PostSchema);
