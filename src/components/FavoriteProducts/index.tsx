import React, {useEffect, useState} from 'react'
import { View, ScrollView, Text } from 'react-native'
import { StyleSheet } from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import productsAssets from '../../../assets/products';
import { Product } from '../../models/index';
import FavoriteProductItem from '../FavoriteProductItem'

const index = () => {

    const [product,setProduct]= useState<Product[]>([])

    useEffect(()=> {
          setProduct(productsAssets)
    },[])

    return (
        <View style={styles.productsContainer}>
            {/* Render Header */}
            <View style={styles.titleProducts}>
                <Text style={styles.topicTitle}>
                    Vitrin İlanları
                </Text>
                <View style={styles.rightTitle}>
                    <Text style={styles.detailTitle}>Hepsini Gör</Text> 
                    <AntDesign name="right" size={18} color="#F24E61" />
                </View>
            </View>
            {/* Render Fav Product */}
            <ScrollView bounces={true} horizontal={true} showsHorizontalScrollIndicator={false}>
               {
                 product.map((item) => {
                    return <FavoriteProductItem prodType='favorite' key={item.id} product={item}/>
            
                 })
               }
            </ScrollView>
        </View>
    )
}

export default index