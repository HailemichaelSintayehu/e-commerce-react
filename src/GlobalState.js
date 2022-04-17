import React,{useState,createContext} from "react";
import ProductsApi from "./pages/Api/productApi";
export const GlobalState = createContext()


export const DataProvider =  ({children}) =>{
    const [token,setToken] = useState(false);
    ProductsApi()
   
    const state = {
        token: [token,setToken],
        ProductsApi:ProductsApi()
    }
    return(
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}