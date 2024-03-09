import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';


const index = () => {
    return (
        <View style={{ backgroundColor: '#2C2C2C', padding: 5, height: 40, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', marginLeft: 10, alignItems: 'center' }}>
                <MaterialCommunityIcons name="message-processing" size={30} color="#757575" />
                <Text style={{ color: 'white', fontSize: 13, marginLeft: 5, marginBottom: 5 }}>Mesaj bildirimlerini aç</Text>
            </View>
            <TouchableOpacity>
                <Entypo name="chevron-right" style={{ marginRight: 7 }} size={30} color="#969696" />
            </TouchableOpacity>

        </View>
    )
}

export default index