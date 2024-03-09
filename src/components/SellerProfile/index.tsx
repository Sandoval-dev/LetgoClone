import React from 'react'
import { View, Image,Text } from 'react-native'
import {AntDesign} from "@expo/vector-icons"
import { FontAwesome } from '@expo/vector-icons';

const index = ({averageRating}: {averageRating:number}) => {
    return (
        <View style={{marginTop:20, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <View>
                   <Image style={{height:44,width:44,borderRadius:22}} source={{uri:"https://pbs.twimg.com/profile_images/1689035173055303680/NYRS6WQh_400x400.png"}}/>
                   <AntDesign name='checkcircle' color="#A6CC71" size={14} style={{position:"absolute", bottom:-4, right:0}} />
                </View>
                <View style={{marginLeft:10}}>
                   <Text style={{fontWeight:"600", fontSize:16}}>FasılK</Text>
                   <View style={{flexDirection:'row', alignItems:'center', gap:3, paddingTop:2}}>
                         {[0,0,0,0,0].map((el,i) => (
                            <FontAwesome key={i} name="star" size={15} color={i<Math.floor(averageRating) ? "#FFD200" : "#DFDFDF"} />
                         ))}
                   </View>
                </View>       
            </View>
            <AntDesign name="right" size={24} color="black" />
        </View>
    )
}

export default index