import React from 'react';
import OrderService from '../services/orderService';
import CartService from '../services/cartService';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import generatePDF from '../services/reportGeneratorService';
import userService from '../services/userService';



class Orders extends React.Component {

  constructor(props){
    super(props);
    this.state={
        orders:[]
    };
    this.setOrders=this.setOrders.bind(this);
  }

  componentDidMount(){
    if(localStorage.getItem('total_per_item') && localStorage.getItem('email') && localStorage.getItem('total')){
      const total_per_item= JSON.parse(localStorage.getItem('total_per_item'));
      OrderService.addItems(localStorage.getItem('email'),total_per_item,localStorage.getItem('total')).then(res=>{
        localStorage.removeItem('total_per_item');
        localStorage.removeItem('total');
        alert("Your order has been placed successfully");
        CartService.emptyCart(localStorage.getItem('email')).then(res=>{
          console.log(res);
        }).catch(err=>{
          console.log(res);
        })
        this.setOrders();
      }).catch(err=>{
      console.log(err);
      });
    }
    else{
      this.setOrders();
    }
  }

  async setOrders(){
    await OrderService.getItems(localStorage.getItem('email')).then(res=>{
      console.log(res.data.message);
      this.setState({orders:res.data.message[0].details.reverse()});
      console.log(this.state.orders);
    }).catch(err=>{
      console.log(err);
      userService.logout();
      this.props.history.push("/login");
    });
  }

  render() {
    const classes = makeStyles({
      table: {
        minWidth: 650,
      },
    });
    return (
    <div>
      <div className="loginBlock">
            <h3>YOUR ORDERS</h3>
      </div>
      <div className="appleBonsai">
      <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Sr. No.</TableCell>
            <TableCell align="center">Ordered On</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.orders && this.state.orders.map((val,index)=>{
            return(
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell align="center">
                {val.orderedOn}
              </TableCell>
              <TableCell align="right">{val.total}</TableCell>
              <TableCell align="right" onClick={()=>{generatePDF(this.state.orders[index])}}>View Details</TableCell>
            </TableRow>
            )
        })
    } 
        </TableBody>
        
      </Table>
    </TableContainer>
    </div>  
    </div>
     );
  }
}

export default Orders;