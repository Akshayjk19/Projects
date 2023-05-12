import React, { useEffect, useState } from 'react'
import { useAuth } from '../Context/AuthProvider'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import Spinners from './Spinners'

function PrivateRoute() {
    const [ok, setok] = useState(false)
    const [auth, setauth] = useAuth()


    useEffect(() => {
      const usercheck=async()=>{
        const res =await axios.get('http://localhost:5000/userprotect')
        if(res.data.ok){
            setok(true)
        }else{
            setok(false)
        }
      }
      if(auth.Token)
      {
        usercheck()
      }
    }, [auth.Token])
    

  return (
   <div>
   {ok ? <Outlet/> : <Spinners/>}
   </div>
  )
}

export default PrivateRoute