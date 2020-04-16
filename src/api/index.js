// import axios from 'axios';
// import VueCookies from 'vue-cookies';
// import { refreshToken } from '../service/login'

// axios.defaults.baseURL = 'http://localhost:3000';

// axios.interceptors.request.use(async function (config) {
//     config.headers.token = VueCookies.get('token');
//     config.headers.refresh_token = VueCookies.get('refresh_token');
  
//     return config;
//   }, function (error) {
//     return Promise.reject(error);
//   });

// axios.interceptors.response.use(function (response) {
//     return response;
//   }, async function (error) {
//     const errorAPI = error.config;
//     //토큰 오류
//     if(error.response.data.status===401 && errorAPI.retry===undefined){
//       errorAPI.retry = true;
//       await refreshToken();
//       return await axios(errorAPI);
//     }
//     return Promise.reject(error);
//   });


// export default axios;