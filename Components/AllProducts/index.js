import React, { Component } from "react";
import { List, Content } from "native-base";

import { connect } from "react-redux";

import { getAllProducts } from "../../redux/actions";
import Product from "../Product/Product";

class AllProduct extends Component {
  componentDidMount() {
    this.props.getAllProducts();
  }
  render() {
    const { navigation, allproducts } = this.props;

    const product = allproducts.map((product) => (
      <Product
        key={product.name + product.id}
        product={product}
        navigation={navigation}
      />
    ));

    return (
      <Content>
        <List>{product}</List>
      </Content>
    );
  }
}
const mapStateToProps = ({ allproducts }) => ({
  allproducts,
});
const mapDispatchToProps = { getAllProducts };

export default connect(mapStateToProps, mapDispatchToProps)(AllProduct);
