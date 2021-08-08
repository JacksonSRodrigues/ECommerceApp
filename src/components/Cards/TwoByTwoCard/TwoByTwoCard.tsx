import React from 'react'
import _ from 'lodash'
import Card from '../Card'
import styles from './TwoByTwoCard.styles'
import ProductItem from '../../ProductGrid/ProductItem'

interface TwoByTwoCardProps {
    heading: string
    items: any[]
    viewMoreText: string,
    onViewMoreClick: () => void
    onItemClick: (product: any) => void
}

const TwoByTwoCard = (props: TwoByTwoCardProps) => {
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