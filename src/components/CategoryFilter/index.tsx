import React, { useEffect, useState } from 'react'
import { ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import categoriesData from '../../../assets/categories'
import styles from './style'
import { Category } from '../../models'
import { useNavigation } from '@react-navigation/native'



const index = () => {
    const [categories, setCategories] = useState<Category []>([])
    const navigation=useNavigation()

    useEffect(() => {
        setCategories(categoriesData)
        return () => {
            setCategories([])
        }
    })
    return (
        <ScrollView 
        bounces={true} 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollStyle}
        >
        {categories.map((item:Category) => (
           <TouchableOpacity onPress={()  => navigation.navigate("CategoryFilter",{category:item})} style={styles.center}>
                <Image source={item.src} style={styles.image}/>
                <Text style={styles.categoryName}>{item.name}</Text>
           </TouchableOpacity>
        ))}
        </ScrollView>
    )
}

export default index