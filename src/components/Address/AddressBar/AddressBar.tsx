import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import styles from './AddressBar.styles'
import {showUpdateAddressScreen} from '../../../actions/address'

const AddressBar = () => {
    const dispatch = useDispatch()
    const { addressSummary = 'Please Select a Delivery Location', isLocationSelected } = useSelector((state) => {
        return {
            addressSummary: undefined,
            isLocationSelected: false
        }
    })

    const onAddOrEditAddress = () => {
        dispatch(showUpdateAddressScreen())
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
