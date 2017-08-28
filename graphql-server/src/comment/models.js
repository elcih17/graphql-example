import mongoose from 'mongoose'

const Schema = mongoose.Schema

const CommentSchema = new Schema({
  post_id: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  },
  content: {
    type: String,
    default: ''
  }
});

mongoose.connect('mongodb://localhost/local');

export default mongoose.model('Comment', CommentSchema);
