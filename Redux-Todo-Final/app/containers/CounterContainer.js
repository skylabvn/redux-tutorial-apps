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

import { connect } from 'react-redux';
import Counter from '../components/Counter.js';
import addNumber, { subNumber } from '../actions/CounterViewActions';

class CounterContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { addNumber, subNumber } = this.props;
    const { number } = this.props.number;

    return (
      <Counter val={ number } {...this.props} />
    );
  }
}



export default connect( 
  state => {
    return {
      number : state.number
    }
  },
  dispatch => {
    return {
      addNumber: (val) => dispatch( addNumber(val) ),
      subNumber: (val) => dispatch( subNumber(val) )
    }
  }

)(CounterContainer);