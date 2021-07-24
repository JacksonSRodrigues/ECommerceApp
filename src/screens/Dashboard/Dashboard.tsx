import React, { useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { getDiscountedProducts } from '../../actions/products'
import { getCarouselProducts } from '../../actions/productCarousels'
import Carousel from '../../components/Carousel/Carousel'
import DiscountCard from '../../components/DiscountCard/DiscountCard'
import { Dimensions } from 'react-native';
import { SCREEN } from '../../routes';
import { AppState } from '../../reducers';
import styles from './Dashboard.styles'


export const Dashboard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const windowWidth = Dimensions.get('window').width;

    const { carousels, products } = useSelector((state: AppState) => {
        return {
            isLoadingProducts: state?.products?.isLoading,
            products: state?.products?.discountedProducts,
            carousels: state?.carousels?.products
        }
    })

    useEffect(() => {
        dispatch(getCarouselProducts())
        dispatch(getDiscountedProducts())
    }, [])


    const onViewAllDiscountClick = () => {
        navigation.navigate(SCREEN.ALL_PRODUCTS)
    }

    const onProductClick = (product: any) => {
        console.log(product)
        navigation.navigate
    }

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.carouselContainer}>
                <Carousel
                    items={carousels}
                    width={windowWidth} />
            </View >
            <DiscountCard
                discountProducts={products}
                onViewAllClick={onViewAllDiscountClick}
                onProductClick={onProductClick} />
        </ScrollView >
    )
}

export default Dashboard