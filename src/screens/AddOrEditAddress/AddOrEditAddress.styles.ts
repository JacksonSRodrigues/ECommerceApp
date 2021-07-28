import { StyleSheet } from "react-native"

export const AddOrEditAddressStyles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        height: 400,
        width: '100%',
        alignSelf: 'flex-end',
        backgroundColor: 'white',
        padding: 15
    },
    heading: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 5
    },
    summary: {
        fontSize: 16,
        marginBottom: 5, color: 'grey'
    }
})


export const AddressListStyles = StyleSheet.create({
    container: {
        marginBottom: 30
    }
})


export const AddAddressStyles = StyleSheet.create({
    containerStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'grey',
        width: 150,
        height: 150,
        borderWidth: 1,
    },
    summary: {
        fontSize: 15,
        textAlign: 'center',
        color: 'blue'
    }
})