import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "http://cf870a86729e.ngrok.io/api";

// axios.defaults.baseURL = "http://localhost:3900/api";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    toast.error("An unexpected error occurrred.");
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

const methods = {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  delete: axios.delete,
  setJwt,
};

export default methods;