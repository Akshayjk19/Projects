import './App.css'
import Login from './Components/Login';
import NavigationBar from './Components/NavigationBar';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import SideNavbar from './Components/SideNavbar';
import Books from './Components/Book/Books'
import AddBook from './Components/Book/AddBook'
import UpdateBook from './Components/Book/UpdateBook'
import ViewBookData from './Components/Book/ViewBookData'
import AddClient from './Components/Client/AddClient'
import Client from './Components/Client/Client'
import UpdateClient from './Components/Client/UpdateClient'
import ViewClient from './Components/Client/ViewClient';
import AddCustomer from './Components/Customer/AddCustomer';
import Customer from './Components/Customer/Customer';
import CustomerView from './Components/Customer/CustomerView';
import CustomerEdit from './Components/Customer/CustomerEdit';
import TeamMembers from './Components/TeamMembers/TeamMembers';
import Teammembersview from './Components/TeamMembers/Teammembersview';
import TeamMembersedit from './Components/TeamMembers/TeamMembersedit';
import AddTeammembers from './Components/TeamMembers/AddTeammembers';
import Order from './Components/Order/Order';
import Orderview from './Components/Order/Orderview';
import AddOrder from './Components/Order/AddOrder';
import Orderedit from './Components/Order/Orderedit';
import UserReg from './Components/UserSide/UserReg';
import MainPage from './Components/MainPage';
import UserLogin from './Components/UserSide/UserLogin';
import UserSideBooks from './Components/UserSide/UserSideBooks';
import Cartviewpage from './Components/UserSide/Cartviewpage';


function App() {
  return (
    <div className="App" >
    <BrowserRouter>
    {<SideNavbar /> ? " "  : <NavigationBar/>}
    <Routes>

    <Route path='/' element={<MainPage/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/SideNavbar' element={<SideNavbar/>}/>

    <Route path='/Books' element={<Books/>}/>
    <Route path='/AddBook' element={<AddBook/>}/>
    <Route path='/updatebook/:_id' element={<UpdateBook/>}/>
    <Route path='/viewbook/:_id' element={<ViewBookData/>}/>

    <Route path='/AddClient' element={<AddClient/>}/>
    <Route path='/Client' element={<Client/>}/>
    <Route path='/updateclient/:_id' element={<UpdateClient/>}/>
    <Route path='/viewecachclient/:_id' element={<ViewClient/>} />

    <Route path='/customer' element={<Customer/>}/>
    <Route path='/addcustomer' element={<AddCustomer/>}/>
    <Route path='/customereachview/:_id' element={<CustomerView/>}/>
    <Route path='/customeredit/:_id' element={<CustomerEdit/>}/>

    <Route path='/teammembers' element={<TeamMembers/>}/>
    <Route path='/addteammembers' element={<AddTeammembers/>}/>
    <Route path='/teammembersview/:_id' element={<Teammembersview/>}/>
    <Route path='/teammembersedit/:_id' element={<TeamMembersedit/>}/>

    <Route path='/order' element={<Order/>}/>
    <Route path='/addorder' element={<AddOrder/>}/>
    <Route path='/ordereachview/:_id' element={<Orderview/>}/>
    <Route path='/orderedit/:_id' element={<Orderedit/>}/>

    <Route path='/userregistration' element={<UserReg/>} />
    <Route path='/userlogin' element={<UserLogin/>}  />
    <Route path='/userbooks' element={<UserSideBooks/>} />
    <Route path='/cartpage' element={<Cartviewpage/>} />

    </Routes>
    </BrowserRouter>

   
    </div>
  );
}

export default App;
