import axios from "axios";
import React,{useState,createContext,useEffect   } from "react";
import ProductsApi from "./pages/Api/productApi";
import UserAPI from "./pages/Api/UserAPI"
export const GlobalState = createContext()

export const DataProvider =  ({children}) =>{
    const [token,setToken] = useState(false);
    
    const refreshToken = async () =>{
       try {
        const res = await axios.get("http://localhost:4000/refresh_token",
        { 
            headers:
        {
            refreshtoken:localStorage.getItem("refresht")
        }
        }) 

        // console.log(res)
        // console.log("the value of res in refresh token:" ,res)

        setToken(res.data.accesstoken)

       } catch (error) {
           console.log("refresh_token:",error)
       }
    }
    useEffect(() => {
        const firstLogin = localStorage.getItem('firstLogin');

        if(firstLogin) refreshToken();
        
    }, [])
    const state = {
        token: [token,setToken],
        ProductsApi:ProductsApi(),
        userAPI:UserAPI(token)
    }

    return(
        <GlobalState.Provider value = {state}>
            {children}
        </GlobalState.Provider>
    )
}