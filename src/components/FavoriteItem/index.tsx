import React from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import { Product } from '../../models'
import { FontAwesome } from "@expo/vector-icons"

const { width, height } = Dimensions.get('window')
type favoriteItemProps = {
    product: Product
}


const index = ({ product }: favoriteItemProps) => {
    return (
        <View style={{ borderColor: '#EAEAEA', borderWidth: 2, padding: 14, borderRadius: 10, marginBottom: 18, height: height * 0.18, shadowColor: 'gray', shadowOpacity: 0.12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 18, borderBottomWidth: 1.2, borderBottomColor: "#dcdee0" }}>
                <Image style={{ width: width * 0.17, height: width * 0.17, borderRadius: 8 }} source={{ uri: product.image }} />
                <View style={{ width: '80%', marginLeft: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name='turkish-lira' color="black" />
                            <Text style={{ fontWeight: 'bold', fontSize: 14, marginLeft: 3 }}>{product.price}</Text>
                        </View>
                        <FontAwesome name="trash-o" size={22} color="#919191" />
                    </View>
                    <Text style={{ fontSize: 14, fontWeight: '500', color: '#646464' }}>
                        {product.description}
                    </Text>
                </View>

            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', width:'74%', marginHorizontal:'13%', marginTop:10, alignItems:'center'}}>
                    <Text style={{color:'#7A7A7A', fontWeight:'bold', fontSize:14}}>Paylaş</Text>
                    <Text style={{color:'#FF3E55', fontWeight:'bold', fontSize:14}}>Sohbet Et</Text>
            </View>
        </View>
    )
}

export default index