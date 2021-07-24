import React, { ComponentProps } from 'react'
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { Image } from 'react-native-elements'

interface ProductGridProps {
    items: any[]
}

function ProductGrid(props: ProductGridProps) {
    const { items } = props
    //console.log(items)
    return (
        <View>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={ProductItem}
                numColumns={2}
            />
        </View>
    )
}

interface ProductItemProps {
    item: {
        name: string,
        thumbnail: string,
        offerText?: string
    }

}
function ProductItem(props: ProductItemProps) {
    const { name, thumbnail, offerText = '' } = props.item
    return <View style={{ width: '48%', height: 250, margin: '1%' }}>
        <Image
            source={{ uri: thumbnail }}
            style={{ width: '100%', height: 200 }}
            PlaceholderContent={<ActivityIndicator />}
        />
        <Text style={{ color: 'black', alignSelf: 'center' }}>{name}</Text>
        <Text style={{ color: 'green', alignSelf: 'center' }}>{offerText}</Text>
    </View>
}

export default ProductGrid
