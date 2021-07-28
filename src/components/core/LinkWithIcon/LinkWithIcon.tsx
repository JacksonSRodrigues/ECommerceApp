import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

type LinkWithIconProps = {
    iconName: string,
    text: string,
    onPress?: () => void
}


const LinkWithIcon = (props: LinkWithIconProps) => {
    const { iconName, text, onPress } = props
    return (< TouchableOpacity onPress={onPress} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }} >
        <Icon type='ionicon' name={iconName} color='red' />
        <Text style={{ color: 'blue' }}> {text} </Text>
    </TouchableOpacity >)
}

export default LinkWithIcon
