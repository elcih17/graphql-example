<template>
  <div id="app">
    <h1> Vue Apollo Example </h1>
    <p>{{hello}}</p>
    <label>name</label>
    <input type="text" v-model="userName">
    <label>age</label>
    <input type="number" v-model="userAge">
    <a href="#" @click="_createUser">createUser</a>

    <div v-if="createdUser">
      <p>user created</p>
      <p>name: {{createdUser.name}}</p>
      <p>age: {{createdUser.age}}</p>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

const helloGQL = gql`
  query {
    hello
  }
`;
const createUserGQL = gql`

  mutation ($userName: String!, $userAge: Int!){
    createUser(name: $userName, age: $userAge) {
      _id
      name
      age
    }
  }
`
export default {
  name: 'app',
  data() {
    return {
      hello: '',
      userName: '',
      userAge: '',
      createdUser: null
    };
  },
  apollo: {
    hello: {
      query: helloGQL,
    }
  },
  methods: {
    _createUser() {
      this.$apollo.mutate({
        mutation: createUserGQL,
        variables: {
          userName: this.userName,
          userAge: this.userAge
        }
      }).then(res => {
        console.log(res);
        this.createdUser = res.data.createUser
      }).catch(err => {
        console.error(err);
      })
    }
  }
};
</script>
