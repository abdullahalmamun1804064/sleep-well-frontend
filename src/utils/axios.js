import Axios from "axios";

const axios = Axios.create({
  baseURL: 'http://localhost:3000',//process.env.NEXT_PUBLIC_BACKEND_URL
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'content-type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: true,
});

export default axios;