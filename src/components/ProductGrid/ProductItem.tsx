import React, { ComponentProps } from 'react'
import { Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements'

import styles from './ProductItem.styles'

interface ProductItemProps {
    name: string,
    thumbnail: string,
    offerText?: string
    onPress?: () => void
}

function ProductItem(props: ProductItemProps) {
    const { name, thumbnail, offerText = '' } = props
    return <TouchableOpacity
        style={styles.productContainer}
        onPress={props?.onPress}>
        <Image
            source={{ uri: thumbnail }}
            style={styles.thumbnail}
            PlaceholderContent={<ActivityIndicator />}
        />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.offer}>{offerText}</Text>
    </TouchableOpacity>
}

export default ProductItem