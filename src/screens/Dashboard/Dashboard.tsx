import React, { useEffect, useState, useMemo } from 'react'
import { View, ScrollView, Animated, ScrollResponderEvent, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
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
import { AnimatedSearchBar } from '../../components/SearchBar/SearchBar'


const SearchBarHeight = 55

export const Dashboard = () => {
    const [searchBarHeight, setSearchBarHeight] = useState(new Animated.Value(SearchBarHeight))
    const [isNavBarHidden, setIsNavBarHidden] = useState(false)
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

    useEffect(() => {
        Animated.timing(searchBarHeight, {
            duration: 100,
            toValue: isNavBarHidden ? 0 : SearchBarHeight,
            useNativeDriver: false
        }).start()
    }, [isNavBarHidden])

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const hasCrossedThreshold = event.nativeEvent.contentOffset.y > SearchBarHeight
        setIsNavBarHidden(hasCrossedThreshold)
    }


    const onViewAllDiscountClick = () => {
        navigation.navigate(SCREEN.ALL_PRODUCTS)
    }

    const onProductClick = (product: any) => {
        console.log(product)
        navigation.navigate
    }

    return (
        <View style={{ flex: 1 }} >
            <AnimatedSearchBar style={{ height: searchBarHeight }} />
            <ScrollView style={styles.screen} onScroll={handleScroll}>
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
        </View>
    )
}

export default Dashboard