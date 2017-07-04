import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Platform,
  Button,
  Text,
  TouchableOpacity,
  FlatList,
  View
} from 'react-native';

export default class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = { number : props.number }
  }

  render() {

    return (
      <View style={ styles.counterView } >
        <Button onPress={ () => this.setState({ number: this.state.number - 1 }) } title="Sub" />
        <Text>Counter: { this.state.number }</Text>
        <Button onPress={ () => this.setState({ number: this.state.number + 1 }) } title="Add" />
        
      </View>
    );
  }
}


Counter.defaultProps = {
  number : 1
}


const styles = StyleSheet.create({
  counterView : {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});