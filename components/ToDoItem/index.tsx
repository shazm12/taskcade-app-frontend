import React,{useState,useEffect,useRef } from 'react'
import { View, Text, TextInput } from 'react-native'
import Checkbox from '../Checkbox'

interface ToDoItemProps {
  todo: {
    id: string;
    content : string;
    isCompleted: boolean;
  },
  onSubmit: () => void

}

const ToDoItem = ({ todo, onSubmit }: ToDoItemProps) => {

  const [checked, setChecked] = useState(false);

  const [content, setContent ]= useState('');

  const input = useRef(null);

  useEffect(() => {

    if(!todo) { return; }
    setChecked(todo.isCompleted);
    setContent(todo.content.toLowerCase());
    
  }, [todo])

  useEffect(() => {

    if(input.current) {
      //get focus on input
      input?.current?.focus();
    }



  },[input])

  const onKeyPress = ({ nativeEvent }) => {
    if(nativeEvent.key === 'Backspace' && content === '') {

      // Delete item
      console.warn('Delete item');

    }
  }


    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 3 }}>
        <Checkbox isChecked={checked} onPress={() => { setChecked(!checked) }} />
        {/* Text Input */}
          <TextInput
            ref={input}
            value ={content}
            onChangeText={setContent}
            style={{
              flex: 1,
              fontSize: 18,
              color: '#aaa',
              marginLeft: 12
            }}
            multiline
            onSubmitEditing={onSubmit}
            blurOnSubmit
            onKeyPress={onKeyPress}

          />
      </View>
    )
}

export default ToDoItem
