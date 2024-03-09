import { ScrollView, Text, View } from "react-native";
import React, { useState } from 'react'
import { Product } from "../../models";
import ImageCarousel from "../../components/ImageCarousel/index"
import DetailsTextBox from "../../components/DetailsTextBox/index"
import SellerProfile from "../../components/SellerProfile/index"
import MappingComponent from "../../components/MappingComponent/index"
import SocialMedias from "../../components/SocialMedias/index"
import MessageBox from "../../components/MessageBox/index"

const index = (props) => {

    const [product, setProduct] = useState<Product>(props.route.params.product)


    return (
        <View style={{flex:1,}}>
            <ScrollView style={{ flex: 1, backgroundColor: 'white', marginBottom:'32%' }}>
                <ImageCarousel images={product.images} />
                <View style={{ paddingHorizontal: 15, paddingVertical: 8 }}>
                    <DetailsTextBox price={product.price} name={product.name} description={product.description} />
                    <SellerProfile averageRating={product.rating} />
                    <MappingComponent />
                    <SocialMedias />
                </View>
            </ScrollView>
            <MessageBox />
        </View>

    )
}

export default index