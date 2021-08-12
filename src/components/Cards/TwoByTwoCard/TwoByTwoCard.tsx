import React from 'react'
import _ from 'lodash'
import Card from '../Card'
import styles from './TwoByTwoCard.styles'
import ProductItem from '../../ProductGrid/ProductItem'
import { DataCardProps } from '../index'

const TwoByTwoCard = (props: DataCardProps) => {
    const {
        heading,
        items,
        viewMoreText,
        onViewMoreClick,
        onItemClick
    } = props
    const fourCards = _.slice(items, 0, 4)

    return (
        <Card
            heading={heading}
            viewMoreText={viewMoreText}
            onViewMoreClick={onViewMoreClick}>
            {
                fourCards.map((item) => (
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

export default TwoByTwoCard