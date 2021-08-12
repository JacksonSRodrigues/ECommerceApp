import React from 'react'
import { View, Text } from 'react-native'
import styles from './SummaryCard.styles'

interface HeaderProps {
    heading: string
}

const Header = (props: HeaderProps) => {
    const { heading } = props
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{heading}</Text>
        </View>
    )
}

export default Header
