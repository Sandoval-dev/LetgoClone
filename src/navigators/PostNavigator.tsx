import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { AntDesign , Entypo} from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Image, SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native'
import PostScreen from '../screens/PostScreen/index'



const Stack = createStackNavigator()
const PostNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={PostScreen}
        options={{
             headerStyle:{backgroundColor:"#F1F1F1"},
             headerTitle: () => (
                <Text style={{fontWeight:'bold',fontSize:15, marginLeft:110}}>İlanlarım</Text>
             ),
             headerLeft: () => (
                <MaterialCommunityIcons style={{marginLeft:15}} name="lightbulb" size={24} color="#919191" />
             ),
             headerRight: () => (
                <Entypo style={{marginRight:15}} name="arrow-right" size={24} color="black" />
             )
        }}
      />
    </Stack.Navigator>
  )
}

export default PostNavigator