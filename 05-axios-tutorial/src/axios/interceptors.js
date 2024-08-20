import axios from "axios";

const authFetch = axios.create({
  baseURL: "https://www.course-api.com",
  headers: {
    Accept: "application/json",
  },
});

authFetch.interceptors.request.use(
  (request) => {
    request.headers["Accept"] = "application/json";
    console.log("request sent");
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response) => {
    console.log("got response");
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 404) {
      // do something
      console.log("Not Found");
    }
    return Promise.reject(error);
  }
);

export default authFetch;
