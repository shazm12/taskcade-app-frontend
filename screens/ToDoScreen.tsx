import React,{useState} from 'react';
import { Platform, StyleSheet, TextInput,FlatList, KeyboardAvoidingView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ToDoItem from '../components/ToDoItem'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ToDoScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  let id = '4'

  const [title,setTitle] = useState('');
  const [todos, setTodos] = useState([{

    id: '1',
    content: 'Buy milk',
    isCompleted: false,
  }, 
  {
    id: '2',
    content: 'Buy cereals',
    isCompleted: false,
  },   
  {
    id: '3',
    content: 'Go to Gym',
    isCompleted: false,
  }

  ]);

  const [checked, setChecked] = useState(false);


  const createNewItem = (atIndex: number) => {

    const newTodos = [...todos];
    newTodos.splice(atIndex,0, {
      id: id,
      content: '',
      isCompleted: false,
    })
    setTodos(newTodos);

  }

  return (
    <KeyboardAvoidingView 
    style= {{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 130 : 0}
      >
      {/* Checkbox */}
      <View style={styles.container}>
        <TextInput 
          value={title}
          onChangeText={setTitle}
          placeholder={'Title'}
          style={styles.title} 
        />

        {/* To Do List */}
        <FlatList

          data ={todos}
          renderItem={({ item, index }) => <ToDoItem todo={item} onSubmit={() => createNewItem(index+1)} />}
          style={{width: '100%'}}

        />
      </View>



    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    height: 32,

  }

});
