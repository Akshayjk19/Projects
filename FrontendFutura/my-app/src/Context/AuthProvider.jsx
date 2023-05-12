import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const [auth, setauth] = useState({
        data:null,
        token:""
    })

    axios.defaults.headers.common["Authorization"] =auth.Token

    useEffect(() => {
        const getuserdata= localStorage.getItem('userinfo')
        if(getuserdata)
        {
          const parsedata=JSON.parse(getuserdata)
          setauth({
            ...auth,
            data:parsedata.data,
            token:parsedata.Token
          })
        }
      }, [])

  return (
   <AuthContext.Provider value={[auth,setauth]}>
   {children}
   </AuthContext.Provider> 
  )
}

const useAuth=()=> useContext(AuthContext)
export { useAuth , AuthProvider }