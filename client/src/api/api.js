
import { config } from '../config.js';
const axios = require('axios');
axios.defaults.baseURL = 'http://localhost:9000'; //update with dev setting
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.withCredentials = true;


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

//  const test = async (data, cb) => {
//     try {
//         const res = await axios.axios({
//         method: 'post',
//         url: '/users/authenticate',
//         data: data,
//     });
//         cb(null,res)
//     } catch (err) {
//         cb(err)
//     }
// }


export default { authenticate }





