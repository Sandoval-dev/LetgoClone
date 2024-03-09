import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import productsAssets from '../../../assets/products';
import { Product } from '../../models/index';
import FavoriteProducts from '../../components/FavoriteProducts/index'
import MainProducts from '../../components/MainProducts/index'
import CategoryFilter from '../../components/CategoryFilter/index'
import MessageNotification from '../../components/MessageNotification/index'

const index = () => {

    const [products, setProduct] = useState<Product[]>([])

    useEffect(() => {
        setProduct(productsAssets)
    }, [])

    return (
        <ScrollView style={{ backgroundColor: 'white', height: '100%' }}>
            <MessageNotification/>
            <CategoryFilter />
            <FavoriteProducts />
            <MainProducts filtered={false} header={"Pendik"} mainProducts={products} />
        </ScrollView>
    )
}

export default index