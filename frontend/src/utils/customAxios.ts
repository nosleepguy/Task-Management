import axios from "axios";
import decodeJWT from "jwt-decode";

// Step-1: Create a new Axios instance with a custom config.
const API_URL_USER = import.meta.env.VITE_API_URL_USER as string;

const customAxios = axios.create({
    baseURL: API_URL_USER,
    timeout: 30000,
});
// Step-2: Create request, response & error handlers
const requestHandler = async (request: any) => {
    // Token will be dynamic so we can use any app-specific way to always
    // fetch the new token before making the call
    //    console.log(request);
    let AUTH_TOKEN = localStorage.getItem("tk");
    if (AUTH_TOKEN) {
        const expired: number = decodeJWT(AUTH_TOKEN);
        var date = new Date();
        var now = date.getTime() / 1000;
        if (expired && now <= expired) {
            request.headers.Authorization = AUTH_TOKEN;
            return request;
        } else {
            const refreshToken = localStorage.getItem("rtk");
            const data = { refreshToken: refreshToken };
            await axios
                .post(`${API_URL_USER}/refreshToken`, data)
                .then((res) => {
                    // console.log(res);
                    if (res.data.errorCode == (400 || 401)) {
                        //domain client
                        window.location.replace(
                            import.meta.env.VITE_DOMAIN as string
                        );
                        localStorage.clear();
                    } else {
                        localStorage.setItem("tk", res.data.data);
                    }
                })
                .catch((err) => {
                    //                console.log(err);
                });
            AUTH_TOKEN = localStorage.getItem("tk");
            request.headers.Authorization = AUTH_TOKEN;
            return request;
        }
    } else {
        return request;
    }
};

const responseHandler = (response: any) => {
    return response;
};

const errorHandler = (error: Error) => {
    return Promise.reject(error);
};

customAxios.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
);

export default customAxios;
