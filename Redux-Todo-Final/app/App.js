import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Platform,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  View
} from 'react-native';
import AddViewContainer from './containers/AddViewContainer';
import CounterContainer from './containers/CounterContainer';
import TaskListContainer from './containers/TaskListContainer';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import numberReducer from './reducers/NumberReducer';
import taskListReducer from './reducers/TaskListReducer';

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

// Store

const store = createStore( 
  combineReducers({ 
    number: numberReducer,
    taskList: taskListReducer
  })
);



export default class Todo extends Component {

  render() {
    return (
      <Provider store={ store } >
        <View style={ styles.container }>
          <AddViewContainer />
          <CounterContainer />
          <TaskListContainer />
        </View>  
      </Provider>    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1F5FE'
  }
});
