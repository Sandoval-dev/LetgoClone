import React from 'react'
import { View, Text } from 'react-native'
import {
    MaterialCommunityIcons,
    FontAwesome5,
    AntDesign,
    Entypo
} from "@expo/vector-icons"

const SocialMediaContainer = (props) => {
    return (
        <View style={{ backgroundColor: props.color, width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
            {props.children}
        </View>
    )
}

const index = () => {
    return (
        <View>
            <Text style={{ marginTop: 20,marginBottom:10, fontSize: 16, color: "#424242" }}>
                Bu ilanı paylaş
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <SocialMediaContainer color="#60E14A">
                    <MaterialCommunityIcons name='chat' size={26} color="white" />
                </SocialMediaContainer>
                <SocialMediaContainer color="#56ACEE">
                    <FontAwesome5 name='twitter' size={26} color="white" />
                </SocialMediaContainer>
                <SocialMediaContainer color="#5EBE48">
                    <FontAwesome5 name='whatsapp' size={26} color="white" />
                </SocialMediaContainer>
                <SocialMediaContainer color="#7FAC53">
                    <AntDesign name='link' size={26} color="white" />
                </SocialMediaContainer>
                <SocialMediaContainer color="#747474">
                    <Entypo name='dots-three-horizontal' size={26} color="white" />
                </SocialMediaContainer>
            </View>
            <View style={{marginTop:'6%', marginBottom:'12%', borderWidth:1.2, borderColor:'#FF3E55',height:44, borderRadius:22, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize:16, fontWeight:'bold', color:"#FF3E55"}}>İlanı şikayet et</Text>
            </View>
        </View>
    )
}

export default index