
const express=require('express')
const bookdata = require('./Config/BookData')
const bookget = require('./Config/BookGet')
const login = require('./Config/Login')
const signup = require('./Config/SignUp')
const token=require('./MiddleWare/TokenValidation')
const bookdelete=require('./Config/BookDelete')
const bookedit = require('./Config/BookEdit')
 const eachone = require('./Config/EachBook')

const client = require('./Config/Client/ClientCreate')
const clientview = require('./Config/Client/ClientView')
const clientdelete = require('./Config/Client/ClientDelete')
const clientedit = require('./Config/Client/ClientEdit')
const vieweachclient=require('./Config/Client/ViewEachClient') 

const customercreate = require('./Config/Customer/CustomerCreate')
const customerview=require('./Config/Customer/CustomerView')
const customerdelete = require('./Config/Customer/CustomerDelete')
const customeredit = require('./Config/Customer/CustomerEdit')
const customereachdata = require('./Config/Customer/Customereachview')

const teammember = require('./Config/TeamMembers/TeamMembersCreate')
const teammemberdataview = require('./Config/TeamMembers/TeamMembersviewdatas')
const viewteammembers = require('./Config/TeamMembers/TeamMemberview')
const editteammember = require('./Config/TeamMembers/TeamMemberEdit')
const deleteteammember = require('./Config/TeamMembers/TeamMemberDelete')

const orderdataadd = require('./Config/Order/OrderCreate')
const viewdata = require('./Config/Order/Orderfulldata')
const orderedit = require('./Config/Order/Orderedit')
const ordervieweach = require('./Config/Order/Ordervieweach')
const orderdelete = require('./Config/Order/Orderdelete')

const userreg = require('./Config/UserSide/UserReg')
const userLogin = require('./Config/UserSide/UserLogin')
const cartitems = require('./Config/UserSide/GetCart')
const addcart = require('./Config/UserSide/GetCart')
const addtocart = require('./Config/UserSide/Addtocartmodle')
const getcart = require('./Config/UserSide/GetCart')
const deletecart=require('./Config/UserSide/DeleteCart')


const router=express.Router()
const mid=[token]

// admin side 
router.route('/signup').post(signup,mid)
router.route('/login').post(login,mid) //login

//admin - book 
router.route('/book').post(bookdata) //add book
router.route('/displaybook').get(bookget) //display book
router.route('/bookdelete/:id').delete(bookdelete) //delete book by id
router.route('/bookedit/:id').put(bookedit) //edit book by id
router.route('/eachbook/:id').get(eachone) //each book data by id

//admin - client
router.route('/client').post(client) //add client
router.route('/clientview').get(clientview) //display client
router.route('/vieweachclient/:id').get(vieweachclient) //each client by id
router.route('/clientdelete/:id').delete(clientdelete) //delete client by id
router.route('/clientedit/:id').put(clientedit) //edit client by id


router.route('/customer').post(customercreate)
router.route('/customerview').get(customerview)
router.route('/customereachview/:id').get(customereachdata)
router.route('/customerdelete/:id').delete(customerdelete)
router.route('/customeredit/:id').put(customeredit)

router.route('/teammembers').post(teammember)
router.route('/teammembersview').get(teammemberdataview)
router.route('/teammemberseachview/:id').get(viewteammembers)
router.route('/teammembersedit/:id').put(editteammember)
router.route('/teammembersdelete/:id').delete(deleteteammember)

router.route('/Order').post(orderdataadd)
router.route('/Orderview').get(viewdata)
router.route('/Orderedit/:id').put(orderedit)
router.route('/Ordereachview/:id').get(ordervieweach)
router.route('/Orderdelete/:id').delete(orderdelete)

router.route('/userregistration').post(userreg,mid)
router.route('/userlogin').post(userLogin,mid)
router.route('/addtocart').post(addtocart)
router.route('/getcart').post(getcart)
router.route('/deletecart').put(deletecart)

// router.route('/userprotect').get(mid,(req,res)=>{
//     res.send({ok:true})
// })





module.exports=router