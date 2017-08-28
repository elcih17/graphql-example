import 'isomorphic-fetch'

import Vue from 'vue'
import {ApolloClient, createNetworkInterface} from 'apollo-client'
import VueApollo from 'vue-apollo'
import App from './App.vue'

const uri = 'http://localhost:3000/graphql'
const networkInterface = createNetworkInterface({
  uri,
  transportBatching: true,
})


Vue.use(VueApollo)

const apolloClient = new ApolloClient({networkInterface})
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  el: '#app',
  apolloProvider,
  render: h => h(App),
})
