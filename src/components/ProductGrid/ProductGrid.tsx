import React from 'react'
import { View, FlatList } from 'react-native';
import ProductItem from './ProductItem'

interface ProductGridProps {
    items: any[]
    onProductPress: (product) => void
}

function ProductGrid(props: ProductGridProps) {
    const { items, onProductPress } = props
    return (
        <FlatList
            data={items}
            keyExtractor={(product) => product.productID}
            renderItem={({ index, item }) => {
                return <ProductItem
                    name={item.name}
                    thumbnail={item.thumbnail}
                    offerText={item?.offerText}
                    onPress={() => onProductPress?.(item)} />
            }}
            numColumns={2}
        />
    )
}

export default ProductGrid

