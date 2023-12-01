import axios from "axios";

export default axios.create({
  baseURL: "https://oec-react-test-yc-api.onrender.com",
  // baseURL: "http://localhost:3500",
});
