import React from 'react'
import * as _ from 'lodash'
import FourCardLayout from '../FourCardLayout/FourCardLayout'
interface DiscountCardProps {
    discountProducts: any[]
    onViewAllClick: () => void
    onProductClick: (product: any) => void
}

const DiscountCard = (props: DiscountCardProps) => {
    const { discountProducts, onViewAllClick, onProductClick } = props

    return (
        <FourCardLayout
            heading={'Discounts For You'}
            viewMoreText={'View All >'}
            items={discountProducts}
            onItemClick={onProductClick}
            onViewMoreClick={onViewAllClick} />
    )
}

export default DiscountCard
