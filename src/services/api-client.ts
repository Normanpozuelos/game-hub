import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "76adf51f6681401aa30a555cb21c7203",
  },
});
