import axios from "axios";
import { getFromLocalStorage } from "../../utils/local-storage";
import { authKey } from "../../constants/storageKey";


const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.timeout = 30000;

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    const accessToken = getFromLocalStorage(authKey)
    if(accessToken){
        config.headers.Authorization = accessToken;
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
//@ts-ignore
instance.interceptors.response.use(function (response) {
    console.log(response);
    // Any status code that lies within the range of 2xx causes this function to trigger
    // Do something with response data
    const responseObject = {
        data: response?.data?.data,
        meta: response?.data?.meta,
    };
    return responseObject;
}, function (error) {
    // Any status codes that fall outside the range of 2xx cause this function to trigger
    // Do something with response error
    const responseObject = {
        statusCode: error?.response?.status || 500,
        message: error?.response?.data?.message || error?.message || "Something went wrong...",
        errorMessages: error?.response?.data?.errorMessages || [],
    };
    return Promise.reject(responseObject);
});

export { instance };
