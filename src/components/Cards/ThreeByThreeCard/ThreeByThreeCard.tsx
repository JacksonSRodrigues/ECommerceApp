import React from 'react'
import _ from 'lodash'
import Card from '../Card'
import styles from './ThreeByThreeCard.styles'
import ProductItem from '../../ProductGrid/ProductItem'

interface ThreeByThreeCardProps {
    heading: string
    items: any[]
    viewMoreText: string,
    onViewMoreClick: () => void
    onItemClick: (product: any) => void
}

const ThreeByThreeCard = (props: ThreeByThreeCardProps) => {
    const {
        heading,
        items,
        viewMoreText,
        onViewMoreClick,
        onItemClick
    } = props
    const nineCards = _.slice(items, 0, 9)

    return (
        <Card
            heading={heading}
            viewMoreText={viewMoreText}
            onViewMoreClick={onViewMoreClick}>
            {
                nineCards.map((item) => (
                    <ProductItem
                        key={item.productID}
                        name={item.name}
                        thumbnail={item.thumbnail}
                        offerText={item?.offerText}
                        onPress={() => onItemClick?.(item)}
                        itemStyle={styles.itemStyle}
                    />))
            }
        </Card>
    )
}

export default ThreeByThreeCard