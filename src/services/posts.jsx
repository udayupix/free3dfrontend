import http from "./http";

const posts = {
  posts: () => {
    return http.get("/user/getpostsss");
  },
  cats: () => {
    return http.get("/user/getcatss");
  },
  catposts: (catobj) => {
    return http.get("/user/getpostcat", catobj);
  },
  singpost: (titlobj) => {
    return http.get("/user/getpostbytitle", titlobj);
  },
  getstats: () => {
    return http.get("/user/getstats");
  },
  homposts: () => {
    return http.get("/user/gethompo");
  },
};

export default posts;