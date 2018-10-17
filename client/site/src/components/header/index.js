import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-primitives";

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    backgroundColor: "blue"
  }
});

class Header extends Component {
  static defaultProps = {
    msg: 'this is the title',
  }

  render() {
    const {msg} = this.props
    return (
      <View style={styles.container}>
        <Text>{msg}</Text>
      </View>
    )
  }
}
export default Header;
