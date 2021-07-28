import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'
import styles from './AddressBar.styles'
import { SCREEN } from '../../../routes'

const AddressBar = () => {
    const navigation = useNavigation()
    const { addressSummary = 'Please Select a Delivery Location', isLocationSelected } = useSelector((state) => {
        return {
            addressSummary: undefined,
            isLocationSelected: false
        }
    })

    const onAddOrEditAddress = () => {
        navigation.navigate(SCREEN.APP_MODALS)
    }

    return (
        <TouchableOpacity style={styles.addressBarContainer} onPress={onAddOrEditAddress}>
            <Icon type='ionicon' name='location-outline' color='red' />
            <Text> {addressSummary} </Text>
            <Icon type='ionicon' name='chevron-down-outline' color='red' />
        </TouchableOpacity>
    )
}

export default AddressBar
