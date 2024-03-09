import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import { AntDesign } from '@expo/vector-icons';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import CategoryFilterScreen from '../screens/CategoryFilterScreen'
import { useNavigation, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import ProductDetailsScreen from "../screens/ProductDetailScreen/index"

const Stackk = createStackNavigator()
const MainHeaderComponent = () => {
  return (
    <SafeAreaView style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginHorizontal: '5%', paddingTop: 35, marginBottom: 10 }}>
      <TouchableOpacity>
        <Image style={{ width: 38, height: 38, borderRadius: 20 }} source={{ uri: "https://pbs.twimg.com/profile_images/1750024092869414912/WrVBR790_400x400.jpg" }} />
      </TouchableOpacity>
      <TextInput
        placeholder='Ara...'
        style={{ flex: 1, fontSize: 15, paddingLeft: '32%', backgroundColor: '#e5e5e5', marginHorizontal: 10, height: 35, borderRadius: 10 }}
      />
      <Text style={{ color: '#FF184D', fontSize: 18 }}>Filtrele</Text>
    </SafeAreaView>
  )
}

const CategoryHeaderComponent = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginHorizontal: '5%', paddingTop: 35, marginBottom: 10 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="#989898" />
      </TouchableOpacity>
      <TextInput
        placeholder='Ara...'
        style={{ flex: 1, fontSize: 15, paddingLeft: '32%', backgroundColor: '#e5e5e5', marginHorizontal: 10, height: 35, borderRadius: 10 }}
      />
      <Text style={{ color: '#FF184D', fontSize: 18 }}>Filtrele (1)</Text>
    </SafeAreaView>
  )
}

const Stack = createStackNavigator()
const MyStack = ({ navigation, route }) => {
  const tabHiddenRoutes = ["ProductDetails"]

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log("Route Name is ", routeName)
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      console.log("Aç ", routeName)
      navigation.setOptions({ tabBarStyle: { display: 'true' } });
    }
  }, [navigation, route]);

  const navigation_user = useNavigation()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          header: () => (
            <MainHeaderComponent />
          )
        }}
      />
      <Stack.Screen
        name='ProductDetails'

        component={ProductDetailsScreen}
        options={{
          headerTitle: "",
          headerTransparent: true,
          headerRight: () => (
            <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', height: 36, width: 36, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 18, marginRight: 20 }}>
              <AntDesign name="arrowright" size={24} color="white" />
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation_user.goBack()} style={{ backgroundColor: 'rgba(0,0,0,0.5)', height: 36, width: 36, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 18, marginLeft: 20 }}>
              <AntDesign style={{ marginRight: -3 }} name="close" size={24} color="white" />
            </TouchableOpacity>
          ),

        }}
      />
      <Stack.Screen
        name='CategoryFilter'
        component={CategoryFilterScreen}
        options={{
          header: () => (
            <CategoryHeaderComponent />
          )
        }}
      />
    </Stack.Navigator>
  )
}

export default function HomeNavigator({ navigation, route }) {
  return <MyStack navigation={navigation} route={route} />
}