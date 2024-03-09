import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeNavigator from './HomeNavigator'
import { Foundation, Ionicons, Entypo,AntDesign  } from "@expo/vector-icons"
import { Text, TouchableOpacity, View } from 'react-native'
import PostNavigator from './PostNavigator'
import SohbetNavigator from './SohbetNavigator'


const Tab = createBottomTabNavigator()
const RootNavigator = () => {

    const CustomTabBarButton = ({children}) => {
        return(
            <TouchableOpacity style={{width:70, height:70, 
            backgroundColor:'#F23F5A',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:35,
            borderWidth:5,
            borderColor:'white',
            marginTop:-18
            }}>
                <Entypo name="camera" size={24} color="white" />
                <Text style={{color:'white', marginTop:2, fontWeight:'600'}}>Sat</Text>
            </TouchableOpacity>
        )
    }

    return (
        <Tab.Navigator
            initialRouteName="Ana Sayfa"
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: true,
                tabBarActiveTintColor: "#F24E61",
                tabBarInactiveTintColor: "#959595",
                headerShown: false,
                tabBarStyle: {
                    height: 60,
                },
            }}
        >
            <Tab.Screen
                name="Ana Sayfa"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Foundation name="home" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Bildirimler"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View>
                            <Ionicons name="notifications" size={24} color={color} />
                            <View style={{position:'absolute',top:-4,right:-10,width:16, height:16, borderRadius:8, backgroundColor:"#F24E61",flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:12, color:'white',}}>
                                    2
                                </Text>
                            </View>
                        </View>

                    )
                }}
            />
              <Tab.Screen
                name="Sat"
                component={HomeNavigator}
                options={{
                   tabBarButton: (props) => <CustomTabBarButton {...props} />
                }}
            />
            <Tab.Screen
                name="Sohbet"
                component={SohbetNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="chat" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="İlanlarım"
                component={PostNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="appstore1" size={24} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default RootNavigator