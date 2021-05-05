import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import Login from './components/login';
import Menubar from './components/menubar';
import Navbar from './components/navbar';
import AboutUs from './components/about-us';
// import { findByTestId } from '@testing-library/dom';
import Feedback from './components/feedback';
import ContactUs from './components/contact-us';
import Products from './components/productsByCategory';
import ProductDetails from './components/productDetails';
import Product from './components/products';
import Cart from './components/cart';

function App() {
  return (
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
        </Switch>
      {/* <Home/> */}
      </div>
      <Footer/>
    </div>
    </Router>
    </div>
  );
}

export default App;
