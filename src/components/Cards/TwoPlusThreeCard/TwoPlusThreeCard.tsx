import React from 'react'
import _ from 'lodash'
import Card from '../Card'
import ProductItem from '../../ProductGrid/ProductItem'
import styles from './TwoPlusThreeCard.styles'
import { DataCardProps } from '../index'

const TwoPlusThreeLayout = (props: DataCardProps) => {
    const { heading, items, viewMoreText, onViewMoreClick, onItemClick } = props
    const top2Cards = _.slice(items, 0, 2)
    const bottom3Cards = _.slice(items, 2, 5)

    return (
        <Card
            heading={heading}
            viewMoreText={viewMoreText}
            onViewMoreClick={onViewMoreClick}>
            {
                top2Cards.map((item) => (
                    <ProductItem
                        key={item.productID}
                        name={item.name}
                        thumbnail={item.thumbnail}
                        offerText={item?.offerText}
                        onPress={() => onItemClick?.(item)}
                        itemStyle={styles.topRowItem}
                    />))
            }
            {
                bottom3Cards.map((item) => (
                    <ProductItem
                        key={item.productID}
                        name={item.name}
                        thumbnail={item.thumbnail}
                        offerText={item?.offerText}
                        onPress={() => onItemClick?.(item)}
                        itemStyle={styles.bottomRowItem}
                    />))
            }
        </Card>
    )
}

export default TwoPlusThreeLayout