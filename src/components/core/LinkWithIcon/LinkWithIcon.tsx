import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import styles from './LinkWithIcon.styles'

type LinkWithIconProps = {
    iconName: string,
    text: string,
    onPress?: () => void
}


const LinkWithIcon = (props: LinkWithIconProps) => {
    const { iconName, text, onPress } = props
    return (
        < TouchableOpacity
            style={styles.container}
            onPress={onPress} >
            <Icon
                type='ionicon'
                name={iconName}
                color='red' />
            <Text
                style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity >)
}

export default LinkWithIcon
