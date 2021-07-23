import axios from "axios";

const intances = axios.create({
  baseURL: "http://localhost:2300",
});

export default intances;
