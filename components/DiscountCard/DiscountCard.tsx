import React, { useMemo } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import ProductGrid from '../ProductGrid/ProductGrid'
import Icon from 'react-native-vector-icons/FontAwesome';
import * as _ from 'lodash'

interface DiscountCardProps {
    discountProducts: any[]
    onViewAllClick: () => void
    onProductClick: (product: any) => void
}

const DiscountCard = (props: DiscountCardProps) => {
    const { discountProducts } = props
    const sampleCards = _.slice(discountProducts, 0, 4)

    return (
        <View style={{ backgroundColor: 'cyan' }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
                <Text style={{ fontWeight: '600' }}>Discounts For You</Text>
                <Button title={'View All >'} onPress={props?.onViewAllClick} />
            </View>
            <View style={{ backgroundColor: 'white', margin: 10 }}>
                <ProductGrid items={sampleCards} onProductPress={props?.onProductClick} />
            </View>
        </View>
    )
}

export default DiscountCard
