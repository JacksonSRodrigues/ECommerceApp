import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ModalStyleView, LinkWithIcon } from '../../components/core'


const AddOrEditAddress = () => {
    return (
        <ModalStyleView>
            <View style={{ flex: 1, height: 400, alignSelf: 'flex-end', backgroundColor: 'white', padding: 15 }}>
                <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 5 }}>Choose your location</Text>
                <Text style={{ fontSize: 16, marginBottom: 5, color: 'grey' }}>Select a delivery location to see product availability and delivery options</Text>
                <AddressList />
                <LinkWithIcon iconName={'location-outline'} text={'Enter a Pincode'} />
                <LinkWithIcon iconName={'locate'} text={'Use my current location'} />
            </View>
        </ModalStyleView>
    )
}


const AddressList = () => {
    return <View style={{ marginBottom: 30 }}><AddAddressCard /></View>
}

const AddAddressCard = (props: any) => {
    return (<TouchableOpacity style={{ width: 150, height: 150, borderWidth: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', borderColor: 'grey' }}>
        <Text style={{ fontSize: 15, textAlign: 'center', color: 'blue' }}>Add an address or pick-up point</Text>
    </TouchableOpacity>)
}

export default AddOrEditAddress
