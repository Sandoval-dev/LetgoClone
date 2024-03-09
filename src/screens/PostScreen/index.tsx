import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import products from '../../../assets/products'
import { Product } from '../../models'
import FavoriteItem from '../../components/FavoriteItem/index'


const index = () => {


    const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([])
    const [headerTexts, setHeaderTexts] = useState<string[]>(["Favoriler", "Satıyor", "Süresi Dolmuş", "Satıldı"])

    useEffect(() => {
        setFavoriteProducts(products)
        return () => {
            setFavoriteProducts([])
        }
    }, [])

    return (

        <View style={{ padding: 13 }}>
            <FlatList
                data={favoriteProducts}
                renderItem={({ item, index }) => (
                    <FavoriteItem product={item} />
                )}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <View style={{flexDirection:'row', paddingVertical:10, justifyContent:'space-around', marginBottom:10}} key={index}>
                            {headerTexts.map((item, index) => (
                                <View style={{borderBottomWidth:index==0 ? 3:0,borderBottomColor:"#FF3E55"}}>
                                  <Text style={{color: index==0 ? "#FF3E55" : "#797979", fontWeight: index==0 ? "bold" : "500", fontSize:15}}>{item}</Text>
                                </View>
                            ))}
                    </View>
                )}

            />
        </View>
    )
}

export default index