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

import AddView from './components/AddView';
import Counter from './components/Counter';
import TaskFlatList from './components/TaskFlatList';

export default class Todo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data : [
        { title: 'Go to the office', isFinished: true },
        { title: 'Prepare tasks for today', isFinished: false },
        { title: 'Team meeting', isFinished: false },
        { title: 'Commit tasks changed', isFinished: false },
      ]
    }
  }

  onAddNewTask = (taskName) => {
    const newTask = { title: taskName, isFinished: false }
    const newTaskList = [ ...this.state.data, newTask ]

    this.setState({ data: newTaskList });
  }

  onFinishedItem = (index) => {
    let newTaskList = this.state.data;
    newTaskList[index].isFinished = true; 
    this.setState({ data: newTaskList });
  }

  onDeleteItem = (index) => {
    let newTaskList = this.state.data.filter( (item, i) => i != index );
    this.setState({ data: newTaskList });
  }

  render() {
    return (
      <View style={ styles.container }>
        <AddView onAddNewTask={ this.onAddNewTask } />
        <Counter />
        <TaskFlatList 
          listData={ this.state.data } 
          onFinishedItem={ this.onFinishedItem } 
          onDeleteItem={ this.onDeleteItem }
        />
      </View>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1F5FE'
  }
});
