import React from 'react'
import _ from 'lodash'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import styles from './FourCardLayout.styles'
import ProductItem from '../ProductGrid/ProductItem'

interface FourCardLayoutProps {
    heading: string
    items: any[]
    viewMoreText: string,
    onViewMoreClick: () => void
    onItemClick: (product: any) => void
}

const FourCardLayout = (props: FourCardLayoutProps) => {
    const { heading, items, viewMoreText, onViewMoreClick, onItemClick } = props
    const fourCards = _.slice(items, 0, 4)

    return (
        <View style={styles.mainBackground}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{heading}</Text>
            </View>
            <View style={styles.productItemsBg}>
                {
                    fourCards.map((item) => (
                        <ProductItem
                            key={item.productID}
                            name={item.name}
                            thumbnail={item.thumbnail}
                            offerText={item?.offerText}
                            onPress={() => onItemClick?.(item)} />))
                }
            </View>
            <View style={styles.seeMoreContainer}>
                <Button
                    type={'clear'}
                    title={viewMoreText}
                    onPress={onViewMoreClick} />
            </View>
        </View>
    )
}

export default FourCardLayout