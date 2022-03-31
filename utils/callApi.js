import axios from "axios";

export const callApi = (url,params) => {
    return axios.get(`https://api.bitbarg.me/api/v1/currencies${null}`,);
};