import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { getDiscountedProducts } from '../../actions/products'
import { getCarouselProducts } from '../../actions/productCarousels'
import Carousel from '../../components/Carousel/Carosel'
import DiscountCard from '../../components/DiscountCard/DiscountCard'

export const Dashboard = () => {
    const dispatch = useDispatch()
    const { carousels, products } = useSelector((state: any) => {
        console.log(`>> state: ${JSON.stringify(state)}`)
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

    }

    const onProductClick = (product: any) => {
        console.log(product)
    }

    return (
        <View >
            < View style={{ width: '100%', height: 250 }}>
                <Carousel items={carousels} />
            </View >
            <DiscountCard discountProducts={products} onViewAllClick={onViewAllDiscountClick} onProductClick={onProductClick} />
        </View >
    )
}

export default Dashboard