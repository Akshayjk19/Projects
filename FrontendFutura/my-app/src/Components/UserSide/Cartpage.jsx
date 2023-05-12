// import React from 'react'
// import { useCart } from '../../Context/CartProvider'

// function Cartpage() {
//     const [cart, setcart] = useCart()
   
//    const removecart = (id) =>{
//     try {
//       const mycart=[...cart]
//       console.log(id)
//       const index=mycart.findIndex(item=>item._id === id)
//       console.log(index);
//       mycart.splice(index,1)
//       setcart(mycart)
//       localStorage.setItem('cart',JSON.stringify(mycart))

//     } catch (error) {
//       console.log(error);
//     }

//    }
//   return (
//     <div>
//     <div>
//     <div>
//     <h4>{cart.length>=1 ? `you have ${cart.length}` : "Add items" }</h4>
//     </div>
//     <div>
//    {cart.map((details)=>(
//     <div key={details._id}>
//     <h4>Book Name:{details.BookName}</h4>
//     <h4>Author:{details.Author}</h4>
//     <h4>Publication:{details.Publication}</h4>
//     <h4>Year:{details.Year}</h4>
//     <h4>Avalibilty:{details.Avalibility}</h4>
//     <button onClick={()=>removecart(details._id)}>Remove</button>
// </div>
//    ))} 
//     </div>
//     </div>
    
//     </div>
//   )
// }


// export default Cartpage

