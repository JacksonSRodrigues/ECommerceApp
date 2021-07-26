import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import ProductGrid from '../ProductGrid/ProductGrid'
import Icon from 'react-native-vector-icons/FontAwesome';
import * as _ from 'lodash'
import styles from './DiscountCard.styles'


interface DiscountCardProps {
    discountProducts: any[]
    onViewAllClick: () => void
    onProductClick: (product: any) => void
}

const DiscountCard = (props: DiscountCardProps) => {
    const { discountProducts, onViewAllClick, onProductClick } = props
    const sampleCards = _.slice(discountProducts, 0)

    return (
        <View style={styles.mainBackground}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Discounts For You</Text>
                <Button title={'View All >'} onPress={onViewAllClick} />
            </View>
            <View style={styles.productListingBackground}>
                <ProductGrid items={sampleCards} onProductPress={onProductClick} />
            </View>
        </View>
    )
}

export default DiscountCard
