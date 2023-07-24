import React, { createContext, useContext, useState } from 'react'

const CartContext=createContext()
function CartProvider({children}) {
    const [cart, setcart] = useState([])
  return (
    
    <CartContext.Provider value={[cart,setcart]}>
    {children}
    </CartContext.Provider>
    
  )
}
const useCart =()=>{return useContext(CartContext)}

export  {useCart , CartProvider}