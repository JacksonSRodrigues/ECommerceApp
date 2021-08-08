import React from 'react'
import * as _ from 'lodash'
import FiveCardLayout from '../Cards/TwoPlusThreeCard/TwoPlusThreeCard'

interface DiscountCardProps {
    discountProducts: any[]
    onViewAllClick: () => void
    onProductClick: (product: any) => void
}

const DiscountCard = (props: DiscountCardProps) => {
    const { discountProducts, onViewAllClick, onProductClick } = props

    return (
        <FiveCardLayout
            heading={'Discounts For You'}
            viewMoreText={'View All >'}
            items={discountProducts}
            onItemClick={onProductClick}
            onViewMoreClick={onViewAllClick} />
    )
}

export default DiscountCard
