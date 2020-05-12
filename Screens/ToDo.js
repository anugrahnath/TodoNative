import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import ListItemsView from '../Components/ListItems';
import AddTodo from '../Components/AddTodos';

export default function ToDoMasterScreen(){

const [todos, setTodos] = useState([
    {text : "Meditation for health", key: 1},
    {text: "Reading the book", key : 2},
    {text : "Create an app on react", key : 3}
  ])


  const pressHandler= (key) => {

    setTodos((previousText) => {
      return previousText.filter(todo => todo.key != key)
    })
  }
  
  const submitHendler = (text) => {
  
    //console.log(text);
  
    setTodos((previousText) => {
      return [
        {text : text, key : Math.random()},
        ...previousText
      ]
    })
  }
  
    return (
  <View style = {styles.container}>
    {/** Header View */}
    {/* <Header/> */}
    <View style={styles.contentView}>
      {/** to form */}
      <AddTodo submitHendler = {submitHendler} />
      <View style={styles.listView}>
        <FlatList
        keyExtractor = {(item, index) => item.key.toString()+index}
        data = {todos}
        renderItem = {({item}) =>(
          
          <ListItemsView item ={item} pressHendlar={pressHandler} />
        )}
        />
  
      </View>
  
    </View>
  
  </View>
      
  )
  }
  
  
  const styles = StyleSheet.create({
    container :{
    flex  : 1,
    //backgroundColor  : "coral",
    },
  contentView: {
    padding : 40,
    //backgroundColor : "green"
  },
  listView:{
    marginTop : 20,
   // backgroundColor: "red"
  }
  
  })