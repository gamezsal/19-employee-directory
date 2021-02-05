import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=100";
// const APIKEY = "";

export default {
 onLoad: function () {
    return axios.get(BASEURL);
  },
};