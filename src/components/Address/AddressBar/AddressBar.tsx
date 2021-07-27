import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { useSelector, useDispatch } from 'react-redux'
import styles from './AddressBar.styles'
const AddressBar = () => {

    const { addressSummary = 'Please Select a Delivery Location', isLocationSelected } = useSelector((state) => {
        return {
            addressSummary: undefined,
            isLocationSelected: false
        }
    })
    return (
        <TouchableOpacity style={styles.addressBarContainer}>
            <Icon type='ionicon' name='location-outline' color='red' />
            <Text> {addressSummary} </Text>
            <Icon type='ionicon' name='chevron-down-outline' color='red' />
        </TouchableOpacity>
    )
}

export default AddressBar
