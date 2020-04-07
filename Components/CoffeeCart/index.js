import React from "react";
import { connect } from "react-redux";
import { checkoutCart } from "../../store/actions";
// NativeBase Components
import { Text, List, Button } from "native-base";
// Component
import CartItem from "./CartItem";
const CoffeeCart = ({ items, checkoutCart }) => {
  let cartItems = items.map((item) => (
    <CartItem item={item} key={`${item.drink} ${item.option}`} />
  ));
  if (!cartItems.length)
    cartItems = (
      <Button full warning>
        <Text>No items </Text>
      </Button>
    );
  return (
    <List>
      {cartItems}
      <Button full danger onPress={() => checkoutCart()}>
        <Text>Checkout</Text>
      </Button>
    </List>
  );
};
const mapStateToProps = (state) => ({ items: state.cartState.items });
const mapDispatchToProps = (dispatch) => {
  return {
    checkoutCart: () => dispatch(checkoutCart()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CoffeeCart);
