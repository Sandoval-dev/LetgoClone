import React from 'react'
import { View, Dimensions, Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const { width, height } = Dimensions.get("window")
const index = () => {
    return (
        <View>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ height: height * 0.19, borderRadius: 12, marginTop: 18 }}
                initialRegion={{
                    latitude: 41.73508,
                    longitude: 27.22521,
                    latitudeDelta: 0,
                    longitudeDelta: 0.5
                }}
            />
            <View style={{flexDirection:'row', alignItems:'center',height:height*0.044,marginTop:-height*0.04,borderBottomWidth:0.2,borderRightWidth:0.2,borderLeftWidth:0.2,backgroundColor:"white", borderColor:"#A6A6A6" ,borderBottomLeftRadius:12, borderBottomRightRadius:12,}}>
                 <Text style={{paddingHorizontal:16}}>39000, Kırklareli</Text>
            </View>
        </View>
    )
}

export default index