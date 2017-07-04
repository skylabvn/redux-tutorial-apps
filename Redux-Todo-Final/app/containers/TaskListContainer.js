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

import { connect } from 'react-redux';
import TaskFlatList from '../components/TaskFlatList';
import deleteTask, { finishTask } from '../actions/TaskListViewActions';

class TaskListContainer extends Component {

  render() {

    console.log(this.props);
    const { data } = this.props.listData;
    const { onFinishedItem, onDeleteItem } = this.props;
    
    return(
      <TaskFlatList dataList={data} {...this.props} />
    );
  }
}

export default connect( 
  state => {
    return {
      listData : state.taskList,
    }
  },
  dispatch => {
    return {
      onFinishedItem: (index) => dispatch( finishTask(index) ),
      onDeleteItem: (index) => dispatch( deleteTask(index) )
    }
  }

)(TaskListContainer);