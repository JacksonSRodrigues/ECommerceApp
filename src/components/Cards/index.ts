import TwoByTwoCard from './TwoByTwoCard'
import ThreeByThreeCard from './ThreeByThreeCard'
import TwoPlusThreeCard from './TwoPlusThreeCard'
import { CardProps } from './Card'
import React from 'react'

enum CardType {
    TwoByTwo = "2x2",
    ThreeByThree = "3x3",
    TwoPlusThree = "2+3"
}

export interface DataCardProps extends CardProps {
    items: any[]
    onItemClick: (product: any) => void
}


const componentTypeMapping = {
    [CardType.TwoByTwo]: TwoByTwoCard,
    [CardType.ThreeByThree]: ThreeByThreeCard,
    [CardType.TwoPlusThree]: TwoPlusThreeCard
}


const CardOfType = ({ type }: { type: CardType }) => {
    return componentTypeMapping[type]
}


export {
    TwoByTwoCard,
    ThreeByThreeCard,
    TwoPlusThreeCard,
    CardType,
    CardOfType
}