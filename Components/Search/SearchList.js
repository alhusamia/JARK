import React, { Component } from "react";
import { connect } from "react-redux";
import { SearchBar } from "react-native-elements";
import { View, FlatList } from "react-native";

import Product from "../Product/Product";

class SearchList extends Component {
  state = {
    data: [],
    value: "",
  };
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%",
        }}
      />
    );
  };
  searchFilterFunction = (text) => {
    this.setState({
      value: text,
    });

    const newData = this.props.allproducts.filter((item) =>
      item.name.toUpperCase().includes(text.toUpperCase())
    );
    this.setState({
      data: newData,
    });
  };
  renderHeader = () => {
    return (
      <SearchBar
        placeholder=" Product Name ..."
        darkTheme
        round
        onChangeText={(text) => this.searchFilterFunction(text)} {/* arrow function not needed */}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };
  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <Product
              key={item.name + item.id} {/* I don't think the key here is needed. The keyExtractor below replaces it. */}
              product={item}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.name + item.id}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}
const mapStateToProps = ({ allproducts }) => ({
  allproducts,
});

export default connect(mapStateToProps)(SearchList);
