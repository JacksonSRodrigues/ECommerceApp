import React, { ComponentProps } from 'react'
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements'

interface ProductGridProps {
    items: any[]
    onProductPress: (product) => void
}

function ProductGrid(props: ProductGridProps) {
    const { items, onProductPress } = props
    //console.log(items)
    return (
        <View>
            <FlatList
                data={items}
                keyExtractor={(product) => product.id}
                renderItem={({ index, item }) => {
                    return <ProductItem
                        name={item.name}
                        thumbnail={item.thumbnail}
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

function ProductItem(props: ProductItemProps) {
    const { name, thumbnail, offerText = '' } = props
    return <TouchableOpacity style={{ width: '48%', height: 220, margin: '1%' }}>
        <Image
            source={{ uri: thumbnail }}
            style={{ width: '100%', height: 180 }}
            PlaceholderContent={<ActivityIndicator />}
        />
        <Text style={{ color: 'black', alignSelf: 'center' }}>{name}</Text>
        <Text style={{ color: 'green', alignSelf: 'center' }}>{offerText}</Text>
    </TouchableOpacity>
}

export default ProductGrid
