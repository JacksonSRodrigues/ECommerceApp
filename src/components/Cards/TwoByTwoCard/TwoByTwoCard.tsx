import React from 'react'
import _ from 'lodash'
import SummaryCard from '../SummaryCard'
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
        <SummaryCard
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
        </SummaryCard>
    )
}

export default TwoByTwoCard