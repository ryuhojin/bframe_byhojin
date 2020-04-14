import store from "@/store";
import axios from "axios";
// import index from "../index"
// import VueCookies from "vue-cookies";
export default {
  isLoggedIn() {
    return store.getters.isLoggedIn;
  },
  login() {
    return axios.get("/static/userdata.json");
  },
  saveUser(user) {
    return store.dispatch("SAVE_USER", user);
  },
//   async login(params){
//       try{
//           const token=await axios.post('/login',{params})
//           VueCookies.set('token',token.data.data.token,'60s');
//           VueCookies.set('refresh_token',token.data.data.refresh_token,'7d');
//           axios.defaults.headers['refresh_token'] = VueCookies.get('refresh_token');
//           return token
//       }catch(err){
//           return err
//       }
//   },
//   async refreshToken() {
//     try {
//       const token = await axios.post("/refreshToken");
//       VueCookies.set("token", token.data.data.token, "30m");
//       return token;
//     } catch (err) {
//       return err;
//     }
//   }
};
