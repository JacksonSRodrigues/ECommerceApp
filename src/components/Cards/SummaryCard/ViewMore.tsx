import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import styles from './SummaryCard.styles'

interface ViewMoreProps {
    viewMoreText: string
    onViewMoreClick?: () => void
}

const ViewMore = (props: ViewMoreProps) => {
    const { viewMoreText, onViewMoreClick } = props
    return (
        <View style={styles.seeMoreContainer}>
            <Button
                type={'clear'}
                title={viewMoreText}
                onPress={() => onViewMoreClick?.()} />
        </View>
    )
}

export default ViewMore
