import {ObjectId} from 'mongodb';

import Users from '../user/models';
import Posts from '../post/models';
import Comments from '../comment/models';

export const resolvers = {
  Query: {
    hello: () => {
      return 'Hello world!';
    },
    user: async (root, args, context) => {
      const {_id} = args
      return await Users.findOne({_id})
    },
    posts: async (obj, args, context) => {
      const {author_id} = args
      return await Posts.find({author_id})
    },
    comments: async (obj, args, context) => {
      const {post_id} = args
      return await Comments.find({post_id})
    }
  },
  Mutation: {
    createUser: async (root, args) => {
      const {name, age} = args
      return await Users.create({name, age})
    },
    createPost: async (root, args, context) => {
      const {author, title, content} = args.post
      return await Posts.create({author, title, content})
    },
    createComment: async (root, args, context) => {
      const {post_id, content} = args.comment
      return await Comments.create({post_id, content})
    }
  },
  User: {
    posts: async (author) => {
      const {_id} = author
      return await Posts.find({author_id: _id})
    },
  },
  Post: {
    comments: async (post) => {
      const {_id} = post
      return await Comments.find({post_id: _id})
    }
  }
};