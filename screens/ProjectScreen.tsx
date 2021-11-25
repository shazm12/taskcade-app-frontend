import React,{useState} from 'react';
import { StyleSheet,FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProjectItem from '../components/ProjectItem'


export default function ProjectScreen() {

  const [project,setProject] = useState([{
    id: '1',
    title: 'project 1',
    createdAt: '2d'
  },
  {
    id: '2',
    title: 'project 2',
    createdAt: '5d'
  },
  {
    id: '3',
    title: 'project 3',
    createdAt: '1d'
  }
])






  return (
    <View style={styles.container}>

      {/* Project/ Task List */}
      <FlatList
        data={project}
        renderItem={({ item }) => <ProjectItem project={item} />}
        style={{ width: '100%' }}
      />




    </View>
  );
}

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
    marginRight: 5


   },
   time:  {

    color: 'darkgray'

   }

});
