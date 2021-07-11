import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Colours } from './Colours';
import { Icon } from 'react-native-elements'


export function List(props) {

  const Renderer = ({ item }) => (
    <View style={(item.status === true) ? ListStyle.listItemDone : ListStyle.listItem}>
      <Text>{item.name}</Text>
      <View style={ListStyle.buttons}>
        <TouchableOpacity onPress={() => props.doneHandler(item.id)}>
          <Icon name="check" color={Colours.secondary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.deleteHandler(item.id)}>
          <Icon name="delete" color={Colours.light} />
        </TouchableOpacity>
      </View>
    </View>
  )

  return (
    <View>
      <FlatList
        data={props.listItems}
        renderItem={Renderer}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

const ListStyle = StyleSheet.create({
  listItem: {
    backgroundColor: Colours.primary,
    marginVertical: 4,
    fontSize: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,

  },
  listItemDone: {
    backgroundColor: Colours.tertiary,
    marginVertical: 4,
    fontSize: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
  },
})