import axios from 'axios';
import React,{useState,useEffect} from 'react'

function UserAPI(token) {

    const [isLogged,setIsLogged] = useState(false);
    const [isAdmin,setIsAdmin] = useState(false);
    const [cart,setCart] = useState([])

    useEffect(() =>{
        if(token){
            const getUser = async() =>{ 
                try {
                    const res = await axios.get("http://localhost:4000/infor",{
                        headers:{Authorization: token}
                    })  
                setIsLogged(true)
                res.data.user.role === 1 ? setIsAdmin(true) : setIsAdmin(false)
                console.log("the value of res in userApi:", res);
                } catch (error) {
                    alert(error.response.data.msg)
                }
            }
            getUser()
        }
    },[token])

    const addCart = async(product) =>{
       

        const check = cart.every(item =>{
            
            return item?._id !== product?._id
        }) 
        if(check){
            setCart([...cart,{...product,quantity:1}])
        }
        // else{
        //     alert("This product has been added to cart")
        // }
    }

  return {
      isLogged:[isLogged,setIsLogged],
      isAdmin:[isAdmin,setIsAdmin],
      addCart:addCart()
  }
}

export default UserAPI