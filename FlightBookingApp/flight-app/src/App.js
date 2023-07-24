
import './App.css';
import Footer from './Components/Layout/Footer';
import NavBar from './Components/Layout/NavBar';
import Home from './Components/Pages/Home';
import Info from './Components/Pages/Info';
import Lounge from './Components/Pages/Lounge';
import Search from './Components/Pages/Search';
import Subscribes from './Components/Pages/Subscribes';
import Support from './Components/Pages/Support';
import Traveler from './Components/Pages/Traveler';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Search/>
      <Support/>
      <Info/>
      <Lounge/>
      <Traveler/>
      <Subscribes/>
      <Footer/>
    </div>
  );
}

export default App;
