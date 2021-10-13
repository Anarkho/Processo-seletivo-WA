import axios from "axios";

const http = axios.create({
  baseURL: "https://opentdb.com/api.php",
});

export default http;
