import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { getDiscountedProducts } from '../../actions/products'
import { getCarouselProducts } from '../../actions/productCarousels'
import Carousel from '../../components/Carousel/Carosel'
import DiscountCard from '../../components/DiscountCard/DiscountCard'

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%'
    },
    carouselContainer: {
        width: '100%',
        height: '20%'
    }
})

export const Dashboard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const { carousels, products } = useSelector((state: any) => {
        return {
            isLoadingProducts: state['products']['isLoading'],
            products: state['products']['discountedProducts'],
            carousels: state['carousels']['products']
        }
    })

    useEffect(() => {
        dispatch(getCarouselProducts())
        dispatch(getDiscountedProducts())
    }, [])


    const onViewAllDiscountClick = () => {
        navigation.navigate('AllProducts')
    }

    const onProductClick = (product: any) => {
        console.log(product)
        navigation.navigate
    }

    return (
        <View style={styles.screen}>
            <View style={styles.carouselContainer}>
                <Carousel
                    items={carousels} />
            </View >
            <DiscountCard
                discountProducts={products}
                onViewAllClick={onViewAllDiscountClick}
                onProductClick={onProductClick} />
        </View >
    )
}

export default Dashboard