import React, { useEffect, useState, useMemo } from 'react'
import { View, ScrollView, Modal, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
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
import { AnimatedSearchBar, SEARCH_BAR_HEIGHT } from '../../components/SearchBar/SearchBar'
import { useResizeAnimation } from '../../components/core/animationHooks'
import AddressBar from '../../components/Address/AddressBar/AddressBar';
import AddOrEditAddress from '../AddOrEditAddress/AddOrEditAddress'
import { SafeAreaView } from 'react-native-safe-area-context';


export const Dashboard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const windowWidth = Dimensions.get('window').width;
    const [searchBarHeight, setIsSearchBarHidden] = useResizeAnimation(SEARCH_BAR_HEIGHT, 0)

    const {
        carousels,
        products,
        showAddressSelection
    } = useSelector((state: AppState) => {
        return {
            showAddressSelection: state?.address.showAddOrEditOption,
            isLoadingProducts: state?.products?.isLoading,
            products: state?.products?.discountedProducts,
            carousels: state?.carousels?.products
        }
    })

    useEffect(() => {
        dispatch(getCarouselProducts())
        dispatch(getDiscountedProducts())
    }, [])

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const hasCrossedThreshold = event.nativeEvent.contentOffset.y > SEARCH_BAR_HEIGHT
        setIsSearchBarHidden(hasCrossedThreshold)
    }


    const onViewAllDiscountClick = () => {
        navigation.navigate(SCREEN.ALL_PRODUCTS)
    }

    const onProductClick = (product: any) => {
        console.log(product)
    }

    return (
        <View style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'red', flexGrow: 1 }} >
            {showAddressSelection && <Modal animationType='slide' transparent={true}><AddOrEditAddress /></Modal>}
            <AnimatedSearchBar style={{ height: searchBarHeight }} />
            <ScrollView style={styles.contentContainer} onScroll={handleScroll} >
                <AddressBar />
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