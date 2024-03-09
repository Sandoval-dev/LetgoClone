import React, { useState } from 'react'
import { View, ScrollView, Text, TextInput, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const MessageBox = ({ title }: { title: string }) => {

    return (
        <View style={{ borderRadius: 40, marginLeft: 8, backgroundColor: '#FF3E55', height: 35, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ padding: 5, paddingHorizontal: 10, color: 'white' }}>{title}</Text>
        </View>
    )
}
const index = () => {
    const [searchValue, setSearchValue] = useState<string>("Hala müsait mi?")
    const [messages, setMessages] = useState<string[]>(["Hala satılık mı?", "Fiyatta pazalık payı var mı?", "Ne durumda?"])
    return (
        <View style={{ position: 'absolute', bottom: 0, width: '100%', height: height * 0.18, shadowColor: 'black', shadowOpacity: 1, elevation: 12, backgroundColor: 'white', overflow: 'hidden' }}>
            <View>
                <ScrollView style={{ marginTop: 16, marginLeft:5 }} horizontal={true} bounces={true} showsHorizontalScrollIndicator={false}>
                    {messages.map((item) => (
                        <MessageBox title={item} />
                    ))}
                </ScrollView>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:13, marginLeft:10 }}>
                <TextInput style={{height:45, backgroundColor:"#F5F5F5", borderRadius:10, flex:1, padding:10}} onChangeText={setSearchValue} value={searchValue} />
                <Text style={{ color: '#FF3E55', fontWeight:'bold', marginHorizontal:10, fontSize:15 }}>Gönder</Text>
            </View>
        </View>
    )
}

export default index