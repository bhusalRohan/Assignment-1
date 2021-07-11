import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
{/* We will be importing colours, header and list item from components folder with respective file */}
import { Colours } from './components/Colours'
import { Header } from './components/Header'
import { List } from './components/List'

{/* The name of the app will be My ToDo List */}
const appDefintion = {
  name: "My ToDo List",
}

const storageKey = 'listdata'

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    if (!data) {
      // read from database
      // setData( data from database )
    }
    else {
      // save into database
    }
  }, [data])

  const addItem = (itemName) => {
    let itemId = new Date().getTime()
    let Item = { name: itemName, id: itemId, status: false }
    setData(data.concat(Item))
  }

  const markItemDone = (itemId) => {
    const items = [...data] // [ {item1} , {item2} ]
    items.forEach((item) => {
      if (item.id === itemId) {
        item.status = true
      }
    })
    // Data will pass as array
    setData(items)
  }

  const deleteItem = (itemId) => {
    //console.log( itemId )
    // copy the data state
    const items = [...data]
    items.forEach((item, index) => {
      if (item.id === itemId) {
        items.splice(index, 1)
      }
    })
    setData(items)
  }


  return (
    <View style={styles.container}>
      <Header name={appDefintion.name} addHandler={addItem} />
      <List listItems={data} doneHandler={markItemDone} deleteHandler={deleteItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: Colours.light,
  },
  paragraph: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
