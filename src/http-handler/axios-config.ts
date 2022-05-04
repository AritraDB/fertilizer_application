import axios from "axios";

const httpInstacne = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

httpInstacne.defaults.headers.common["demoToken2"] = "222";

export default httpInstacne;
