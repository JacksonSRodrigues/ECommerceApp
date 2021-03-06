import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { ModalStyleView, LinkWithIcon } from '../../components/core'
import {
    AddOrEditAddressStyles,
    AddressListStyles,
    AddAddressStyles
} from './AddOrEditAddress.styles'
import { hideUpdateAddressScreen} from '../../actions/address'

const AddOrEditAddress = () => {
    const dispatch = useDispatch()
    return (
        <ModalStyleView onOutsideClick={() => dispatch(hideUpdateAddressScreen())}>
            <View style={AddOrEditAddressStyles.containerStyle}>
                <Text style={AddOrEditAddressStyles.heading}>Choose your location</Text>
                <Text style={AddOrEditAddressStyles.summary}>Select a delivery location to see product availability and delivery options</Text>
                <AddressList />
                <LinkWithIcon iconName={'location-outline'} text={'Enter a Pincode'} />
                <LinkWithIcon iconName={'locate'} text={'Use my current location'} />
            </View>
        </ModalStyleView>
    )
}


const AddressList = () => {
    return (<View style={AddressListStyles.container}>
        <AddAddressCard />
    </View>)
}

const AddAddressCard = (props: any) => {
    return (<TouchableOpacity style={AddAddressStyles.containerStyle}>
        <Text style={AddAddressStyles.summary}>Add an address or pick-up point</Text>
    </TouchableOpacity>)
}

export default AddOrEditAddress
