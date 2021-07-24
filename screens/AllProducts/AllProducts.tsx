import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ProductGrid from '../../components/ProductGrid/ProductGrid'
import { getProducts } from '../../actions/products'


const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%'
    }
})


const AllProducts = () => {
    const dispatch = useDispatch()
    const { products } = useSelector((state: any) => {
        return {
            isLoadingProducts: state['products']['isLoading'],
            products: state['products']['allProducts']
        }
    })

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const onProductClick = (product) => {
        console.log(product)
    }

    return (
        <View style={styles.screen} >
            <ProductGrid
                items={products}
                onProductPress={onProductClick} />
        </View >
    )
}

export default AllProducts
