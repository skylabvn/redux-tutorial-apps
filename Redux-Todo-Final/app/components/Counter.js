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
  }

  render() {

    const { val, addNumber, subNumber } = this.props;

    return (
      <View style={ styles.counterView } >
        <Button onPress={ () => subNumber( val - 1 ) } title="Sub" />
        <Text>Counter: { val }</Text>
        <Button onPress={ () => addNumber( val + 1 ) } title="Add" />
        
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
