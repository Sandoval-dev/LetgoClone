import React from 'react'
import { Text, View } from 'react-native'
import { FontAwesome, AntDesign, FontAwesome5 } from "@expo/vector-icons"

const index = ({ price, name, description }: { price: number, name: string, description?: string }) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <FontAwesome name="turkish-lira" size={24} color="black" />
                    <Text style={{ fontSize: 26, fontWeight: 'bold' }}>{price}</Text>
                </View>
                <View style={{ width: 40, height: 40, backgroundColor: '#F1F1F1', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                    <AntDesign name='heart' size={24} color="#9E9E9E" />
                </View>
            </View>
            <Text style={{ fontSize: 22, fontWeight: '500', marginTop: 5 }}>
                {name}
            </Text>
            <View style={{justifyContent:'space-between', flexDirection:'row', alignItems:'center', marginTop:15}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap:5 }}>
                    <FontAwesome5 name="fire" size={24} color="#FF3E55" />
                    <Text style={{ color: '#FF3E55' }}>58 dk</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around', alignItems:'center', gap:5, width:'16%', backgroundColor:'#F3F3F3', paddingHorizontal:7, borderRadius:14, paddingVertical:3}}>
                    <FontAwesome5 name="eye" size={24} color="#9E9E9E" />
                    <Text style={{color:'#9E9E9E'}}>14</Text>
                </View>
            </View>
            <Text style={{marginTop:25}}>
                {description}
            </Text>
        </View>
    )

}

export default index