import React from 'react'
import { View, Text } from 'react-native'
import styles from './SummaryCard.styles'
import Header from './Header'
import ViewMore from './ViewMore'

interface SummaryCardProps {
    heading?: string
    viewMoreText?: string
    onViewMoreClick?: () => void
    children?: any
}

const SummaryCard = (props: SummaryCardProps) => {
    const {
        heading = '',
        viewMoreText = 'View More',
        onViewMoreClick,
        children
    } = props

    return (
        <View
            style={styles.cardBackground}>
            <Header
                heading={heading} />
            <View style={styles.productItemsBg}>
                {children}
            </View>
            <ViewMore
                viewMoreText={viewMoreText}
                onViewMoreClick={onViewMoreClick} />
        </View>
    )
}

export default SummaryCard



