import {ObjectId} from 'mongodb';

import Users from '../user/models';

export const resolvers = {
  Query: {
    hello: () => {
      return 'Hello world!';
    },
    user: (root, {_id}) => {
      return Users.findOne(ObjectId(_id))
        .then(user => user)
        .catch(err => err)
    },
    users: () => {
      return Users.find({})
        .then(users => users)
        .catch(err => err)
    }
  },
  Mutation: {
    createUser: (root, args) => {
      const {name, age} = args
      return Users.create({name, age})
        .then(user => user)
        .catch(err => err)
    }
  }
};