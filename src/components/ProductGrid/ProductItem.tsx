import React, { ComponentProps } from 'react'
import { Text, ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native-elements'

import styles from './ProductItem.styles'

interface ProductItemProps {
    name: string,
    thumbnail: string,
    offerText?: string
    onPress?: () => void
    itemStyle?: any
}

function ProductItem(props: ProductItemProps) {
    const { name, thumbnail, offerText = '', itemStyle = {} } = props
    return <TouchableOpacity
        style={[styles.productContainer, itemStyle]}
        onPress={props?.onPress}>
        <Image
            source={{ uri: thumbnail }}
            containerStyle={styles.thumbnail}
            PlaceholderContent={<ActivityIndicator />}
        />

        <Text style={styles.title}>{name}</Text>
        <Text style={styles.offer}>{offerText}</Text>
    </TouchableOpacity>
}

export default ProductItem