import React from "react";
import { connect } from "react-redux";
import {
  incrementQty,
  decrementQty,
  removeItem,
} from "../../store/actions/CartActions";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles({
  table: {
    maxWidth: 650,
  },
});

const Cart = (props) => {
  const classes = useStyles();
  const cartItems = props.cartItems;
  //to remove the item completely
  const handleRemove = (id) => {
    props.removeItem(id);
  };
  const handleIt = (id) => {
    console.log("triggered" + id);
  };

  //to add the quantity
  const incrementQuantity = (id) => {
    props.incrementQty(id, 1);
  };
  //to substruct from the quantity
  const decrementQuantity = (id) => {
    props.decrementQty(id, 1);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell align="right">Product Image</TableCell>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((row, index) => (
            <TableRow key={index} style={{ height: "60px" }}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="right">
                <img
                  src={row.imageUrl}
                  style={{ width: "60px", height: "60px" }}
                  alt={row.name}
                />
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">
                <AddIcon onClick={() => incrementQuantity(row.id)} />
                {row.quantity}
                <RemoveIcon onClick={() => decrementQuantity(row.id)} />
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementQty: (id, qty) => {
      dispatch(incrementQty(id, qty));
    },
    decrementQty: (id, qty) => {
      dispatch(decrementQty(id, qty));
    },
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
