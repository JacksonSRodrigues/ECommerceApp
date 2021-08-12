import React from 'react'
import { CardType, CardOfType, DataCardProps } from '../Cards'

interface DynamicCardProps {
    type: string,
    heading: string,
    viewMoreText: string
}

const DynamicCard = (props: DynamicCardProps) => {
    const CardComponent = CardOfType({ type: '2x2' as CardType })

    const componentProps: DataCardProps = {
        heading: props.heading,
        items: [],
        viewMoreText: 'View More',
        onItemClick: (item) => console.log('hi'),
        onViewMoreClick: () => console.log('View More')
    }
    return (
        <CardComponent {...componentProps} />
    )
}

export default DynamicCard
