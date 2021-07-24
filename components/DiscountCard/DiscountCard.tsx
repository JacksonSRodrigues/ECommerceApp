import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import ProductGrid from '../ProductGrid/ProductGrid'
import Icon from 'react-native-vector-icons/FontAwesome';
import * as _ from 'lodash'
const styles = StyleSheet.create({
    mainBackground: {
        backgroundColor: 'cyan'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10
    },
    headerTitle: {
        fontWeight: '600'
    },
    productListingBackground: {
        backgroundColor: 'white',
        margin: 10
    }
})

interface DiscountCardProps {
    discountProducts: any[]
    onViewAllClick: () => void
    onProductClick: (product: any) => void
}

const DiscountCard = (props: DiscountCardProps) => {
    const { discountProducts } = props
    const sampleCards = _.slice(discountProducts, 0, 4)

    return (
        <View style={styles.mainBackground}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Discounts For You</Text>
                <Button title={'View All >'} onPress={props?.onViewAllClick} />
            </View>
            <View style={styles.productListingBackground}>
                <ProductGrid items={sampleCards} onProductPress={props?.onProductClick} />
            </View>
        </View>
    )
}

export default DiscountCard
