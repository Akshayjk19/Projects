const express = require('express')
const register = require('./Congi/User/Register')
const login = require('./Congi/User/Login')
const addproduct = require('./Congi/Admin/ProductAdd')
const editproduct = require('./Congi/Admin/ProductEdit')

const router=express.Router()

router.route('/register').post(register)
router.route('/login').post(login)

//admin product
router.route('/addproduct').post(addproduct)
router.route('/editproduct/:id').put(editproduct)



module.exports=router