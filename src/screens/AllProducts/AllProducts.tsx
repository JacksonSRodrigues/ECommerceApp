import React, { useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ProductGrid from '../../components/ProductGrid/ProductGrid'
import { getProducts } from '../../actions/products'
import { AppState } from '../../reducers'
import styles from './AllProducts.styles'

type ProductState = {
    isLoading: Boolean
    products: any[]
}

const productSelector = (state: AppState): ProductState => {
    return {
        isLoading: state?.products?.isLoading,
        products: state?.products?.allProducts
    }
}


const AllProducts = () => {
    const dispatch = useDispatch()
    const { products, isLoading } = useSelector(productSelector)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const onProductClick = (product) => {
        console.log(product)
    }

    if (isLoading) {
        return <View>
            <ActivityIndicator />
        </View>
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
