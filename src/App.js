import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Menubar from './components/MenuBar';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
// import { findByTestId } from '@testing-library/dom';
import Feedback from './components/Feedback';
import ContactUs from './components/ContactUs';
import Products from './components/ProductsByCategory';
import ProductDetails from './components/ProductDetails';
import Product from './components/Products';
import Cart from './components/Cart';
import Orders from './components/Orders';

function App() {
  return (
    // Routing Part
    <div>
      <Router>
    <div>
      <Header/>
      <div>
        <Navbar/>
        <Menubar/>
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/login"  component={Login}></Route>
            <Route path="/about-us"  component={AboutUs}></Route>
            <Route path="/contact-us"  component={ContactUs}></Route>
            <Route path="/feedback"  component={Feedback}></Route>
            <Route path="/productsByCategory/:id"  component={Products}></Route>
            <Route path="/products"  component={Product}></Route>
            <Route path="/product-details:id"  component={ProductDetails}></Route>
            <Route exact path="/cart" component={Cart}/>
            <Route path="/orders" component={Orders}></Route>
        </Switch>
      </div>
      <Footer/>
    </div>
    </Router>
    </div>
  );
}

export default App;
