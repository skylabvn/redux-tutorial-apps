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

export default class TaskFlatList extends Component {

  renderItem = ({item, index}) => {

    const { onFinishedItem, onDeleteItem } = this.props;

    return (
      <View style={ styles.itemContainer }>
        <View>
          <TouchableOpacity style={{ marginTop: -2 }} onPress={ () => onFinishedItem(index) }>
            <Text> { (item.isFinished) ? `✅` : `🕘` } </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ color: 'black'}}>{item.title}</Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <TouchableOpacity style={{ marginTop: -2 }} onPress={ () => onDeleteItem(index) }>
            <Text>{`❌`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {

    console.log(this.props);
    const { dataList } = this.props;
    

    return(
      <FlatList
        data={dataList}
        extraData={this.props}
        keyExtractor={ (item, index) => index }
        renderItem={ this.renderItem }
      />
    );
  }
}

const styles = StyleSheet.create({
  itemContainer : {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal : 10,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    borderColor: 'gray',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowColor: 'gray',
    elevation: 2
  }
});