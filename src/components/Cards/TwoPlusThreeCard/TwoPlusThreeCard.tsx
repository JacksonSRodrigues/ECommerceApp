import React from 'react'
import _ from 'lodash'
import SummaryCard from '../SummaryCard'
import ProductItem from '../../ProductGrid/ProductItem'
import styles from './TwoPlusThreeCard.styles'

interface TwoPlusThreeLayoutProps {
    heading: string
    items: any[]
    viewMoreText: string,
    onViewMoreClick: () => void
    onItemClick: (product: any) => void
}

const TwoPlusThreeLayout = (props: TwoPlusThreeLayoutProps) => {
    const { heading, items, viewMoreText, onViewMoreClick, onItemClick } = props
    const topTwoCards = _.slice(items, 0, 2)
    const bottom3Cards = _.slice(items, 2, 5)

    return (
        <SummaryCard
            heading={heading}
            viewMoreText={viewMoreText}
            onViewMoreClick={onViewMoreClick}>
            {
                topTwoCards.map((item) => (
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
        </SummaryCard>
    )
}

export default TwoPlusThreeLayout