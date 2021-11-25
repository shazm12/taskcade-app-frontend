
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    root: {
  
      flexDirection: 'row',
      width: '100%',
      padding: 10
  
  
    },
    itemContainer: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      backgroundColor: '#eaeaea',
      marginRight: 10
  
    },
     title: {
  
      fontSize: 20,
      marginRight: 5,
      color: 'black'
  
  
     },
     time:  {
  
      color: 'darkgray'
  
     }
  
  });

export default styles;