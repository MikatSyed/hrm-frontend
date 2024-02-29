
import { authKey } from "../constants/storageKey";
import { getFromLocalStorage, setToLocalStorage } from "../utils/local-storage";
import { decodedToken } from "../utils/jwt";


export const storeUserInfo = ({accessToken})=>{
  return  setToLocalStorage(authKey,accessToken);
}

export const getUserInfo = () =>{
    const authToken = getFromLocalStorage(authKey);

    if(authToken){
        const decodedData = decodedToken(authToken);
        return decodedData;
    }
    else {
        return ""
    }
}


export const removeUserInfo = (key) => {
    return localStorage.removeItem(key)
}

export const isLoggedIn = () =>{
    const authToken = getFromLocalStorage(authKey);
    return !! authToken
}
