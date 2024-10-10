/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import Todoform from './components/TodoForm';
import Todolist from './components/TodoList';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';


function App() {
  return (
    <SafeAreaView>
      <Todolist></Todolist>
      <Todoform></Todoform>
      
    </SafeAreaView>
  );
}


export default App;
