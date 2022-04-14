    import React,{useState,useEffect} from 'react'

    import {useParams} from 'react-router-dom'

    import axios from 'axios' 

    import {showErrMsg,showSuccessMsg} from '../utilities/Notification/Notification'

    
    function ActivationEmail() {
        const {activation_token} = useParams()
        const [error,setError] = useState('')
        const [success,setSuccess] = useState('')
        useEffect(()=>{
          if(activation_token){
            const activationEmail = async() =>{
              try {
                const res = await axios.post('http://localhost:4000/activation',{activation_token})
                setSuccess(res.data.msg)
                 
              } catch (err) {
                err.response.data.msg && setError(error.response.data.msg)
              }
            }
            activationEmail()
          }
        },[activation_token])


      return ( 
        <div className='active_page'>
            {error && showErrMsg(error)}
            {success && showSuccessMsg(success)}

        </div>
         )
    }
    
    export default ActivationEmail