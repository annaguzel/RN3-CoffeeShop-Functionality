import React from "react";
import { connect } from "react-redux";
import { removeItemFromCart } from "../../store/actions";
// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";
// Style
import styles from "./styles";
const CartItem = ({ item, removeItemFromCart }) => (
  <ListItem style={styles.listStyle}>
    <Left>
      <Text style={styles.drink}> {item.drink} </Text>
      <Text note style={styles.option}>
        {item.option}
      </Text>
    </Left>
    <Body>
      <Text style={styles.quantity}>{item.quantity}</Text>
    </Body>
    <Right>
      <Button transparent>
        <Icon
          name="trash"
          style={styles.removeItem}
          onPress={() => removeItemFromCart(item)}
        />
      </Button>
    </Right>
  </ListItem>
);
const mapDispatchToProps = (dispatch) => {
  return {
    removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
  };
};
export default connect(null, mapDispatchToProps)(CartItem);
