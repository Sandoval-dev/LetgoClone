import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Feather , Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import SohbetScreen from "../screens/SohbetScreen"


const Stack = createStackNavigator()
const SohbetNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={SohbetScreen}
        options={{
          headerStyle: { backgroundColor: "#F1F1F1" },
          headerTitle: () => (
            <Text style={{ fontSize: 16, marginLeft: 110 }}>Sohbet - Hepsi</Text>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', gap:10, marginRight:10 }}>
             <Feather name="settings" size={24} color="#969696" />
              <Entypo name="dots-three-horizontal" size={24} color="#969696" />
            </View>
          )
        }}
      />
    </Stack.Navigator>
  )
}

export default SohbetNavigator