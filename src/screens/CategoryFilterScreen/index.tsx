import { ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import productsAssets from '../../../assets/products';
import { Category, Product } from '../../models/index';
import MainProducts from '../../components/MainProducts/index'
import MessageNotification from '../../components/MessageNotification/index'
import FilteringCategory from '../../components/FilteringCategory/index'


function index (props) {

    const [products, setProduct] = useState<Product[]>([])
    const [category,setCategory] = useState<Category>(props.route.params.category)

    useEffect(() => {
        setProduct(productsAssets)
    }, [])

    return (
        <ScrollView style={{ backgroundColor: 'white', height: '100%' }}>
            <FilteringCategory category={category}/>
            <MessageNotification  />
            <MainProducts mainProducts={products} filtered={true} header={"Arama Sonuçları"} />
        </ScrollView>
    )
}

export default index