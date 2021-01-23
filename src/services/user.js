import jwtDecode from "jwt-decode";
import http from "./http";
const [userEndpoint, tokenKey] = ["/user", "token"];

http.setJwt(getJwt());

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

const user = {
  login: async (loginobj) => {
    const { data: jwt } = await http.post(userEndpoint + "/login", loginobj);
    localStorage.setItem(tokenKey, jwt);
    return jwt;
  },
  
  glogin: async (gloginobj) => {
    const { data: jwt } = await http.post(userEndpoint + "/glogin", gloginobj);
    localStorage.setItem(tokenKey, jwt);
    return jwt;
  },

  register: async (registerobj) => {
    const { data: jwt } = await http.post(
      userEndpoint + "/register",
      registerobj
    );
    localStorage.setItem(tokenKey, jwt);
    return jwt;
  },

  logout: () => {
    localStorage.removeItem(tokenKey);

  },

  getcats: async () => {
    return await http.post(userEndpoint + "/getcats");
  },

  forgotpass: async (fpobj) => {
    return await http.post(userEndpoint + "/forgotpass", fpobj);
  },

  getsfts: async () => {
    return await http.post(userEndpoint + "/getsftss");
  },

  getCurrentUser: () => {
    try {
      const jwt = localStorage.getItem(tokenKey);
      const some = jwtDecode(jwt);
      if (some.exp >= Date.now() / 1000) {
        return some;
      }
      user.logout();
    } catch (ex) {
      return null;
    }
  },
};

export default user;
