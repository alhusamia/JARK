import React, { Component } from "react";
import { List, Content } from "native-base";

import { connect } from "react-redux";

import Product from "../Product/Product";

class AllProduct extends Component {
  render() {
    const { navigation, allproducts } = this.props;

    const products = allproducts.map((product) => (
      <Product
        key={product.name + product.id}
        product={product}
        navigation={navigation}
      />
    ));

    return (
      <Content>
        <List>{products}</List>
      </Content>
    );
  }
}
const mapStateToProps = ({ allproducts }) => ({
  allproducts,
});

export default connect(mapStateToProps)(AllProduct);
