import React from 'react'
import _ from 'lodash'
import Card from '../Card'
import styles from './ThreeByThreeCard.styles'
import ProductItem from '../../ProductGrid/ProductItem'
import { DataCardProps } from '../index'

const ThreeByThreeCard = (props: DataCardProps) => {
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