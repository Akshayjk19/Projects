import React from 'react'
import UserNavbar from './UserNavbar'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Userlayout({children}) {
  return (
    <div>
    <UserNavbar />
    <main >
    
    {children}
    
    </main>
    </div>
  )
}

export default Userlayout