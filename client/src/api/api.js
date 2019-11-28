
// import { config } from '../config.js';
const axios = require('axios');
axios.defaults.baseURL = 'http://localhost:9000'; //update with dev setting
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true

const authenticate = (data, cb) => {
   axios({
      method: 'post',
      url: '/users/authenticate',
      data: data,
   })
   .then((res) => {
      cb(null,res)
   })
   .catch(function (err) {
      cb(err)
   })
}

const me = (cb) => {
   axios({
       method: 'get',
       url: '/users/me'
    })
   .then((res) => {
      cb(null,res)
   })
   .catch(function (err) {
      cb(err)
   })
}

const logout = (cb) => {
   axios({
       method: 'get',
       url: '/users/logout'
    })
   .then((res) => {
      console.log(res)
      cb(null,res)
   })
   .catch(function (err) {
      cb(err)
   })
}

const sessions = (query, cb) => {
   axios({
       method: 'get',
       url: '/sessions'
    })
   .then((res) => {
      cb(null,res)
   })
   .catch(function (err) {
      cb(err)
   })
}

const session = (id, cb) => {

   axios({
       method: 'get',
       url: `/sessions/${id}`
    })
   .then((res) => {
       cb(null,res)
   })
   .catch(function (err) {

      cb(err)
   })
}


export default { authenticate, me, logout, sessions, session }





