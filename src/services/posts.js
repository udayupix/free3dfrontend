import http from "./http";

const posts = {
  cats: () => {
    return http.post("/user/getcats");
  },
  
};

export default posts;