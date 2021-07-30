import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import ProductGrid from '../ProductGrid/ProductGrid'
import * as _ from 'lodash'
import styles from './DiscountCard.styles'
import ProductItem from '../ProductGrid/ProductItem'

interface DiscountCardProps {
    discountProducts: any[]
    onViewAllClick: () => void
    onProductClick: (product: any) => void
}

const DiscountCard = (props: DiscountCardProps) => {
    const { discountProducts, onViewAllClick, onProductClick } = props
    const sampleCards = _.slice(discountProducts, 0, 4)

    return (
        <View style={styles.mainBackground}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Discounts For You</Text>
                <Button title={'View All >'} onPress={onViewAllClick} />
            </View>
            <View style={styles.productListingBackground}>
                {
                    sampleCards.map((item) => (
                        <ProductItem 
                            key={item.productID}
                            name={item.name}
                            thumbnail={item.thumbnail}
                            offerText={item?.offerText}
                            onPress={() => props.onProductClick?.(item)} />))
                }
            </View>
        </View>
    )
}

export default DiscountCard
