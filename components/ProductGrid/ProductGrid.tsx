import React, { ComponentProps } from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements'

interface ProductGridProps {
    items: any[]
    onProductPress: (product) => void
}

function ProductGrid(props: ProductGridProps) {
    const { items, onProductPress } = props
    return (
        <View>
            <FlatList
                data={items}
                keyExtractor={(product) => product.id}
                renderItem={({ index, item }) => {
                    return <ProductItem
                        name={item.name}
                        thumbnail={item.thumbnail}
                        offerText={item?.offerText}
                        onPress={() => onProductPress?.(item)} />
                }}
                numColumns={2}
            />
        </View>
    )
}

interface ProductItemProps {
    name: string,
    thumbnail: string,
    offerText?: string
    onPress?: () => void
}


const styles = StyleSheet.create({
    productContainer: {
        width: '48%',
        height: 220,
        margin: '1%'
    },
    thumbnail: {
        width: '100%',
        height: 180
    },
    title: {
        color: 'black',
        alignSelf: 'center'
    },
    offer: {
        color: 'green',
        alignSelf: 'center'
    }
})

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

export default ProductGrid
