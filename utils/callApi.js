import axios from "axios";

export const callApi = (url) => {
    console.log("hellllp");
    try {
        axios
            .get("https://api.bitbarg.me/api/v1/currencies")
            .then(({ data, status }) => {
                if (status == 200) {
                    return data;
                }
            })
            .catch((e) => console.log("millllad", e));
    } catch (error) {
        console.log("miiiilad", error);
    }
};