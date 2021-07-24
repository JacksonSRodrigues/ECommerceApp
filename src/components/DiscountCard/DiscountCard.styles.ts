import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    mainBackground: {
        backgroundColor: 'cyan'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10
    },
    headerTitle: {
        fontWeight: '600'
    },
    productListingBackground: {
        backgroundColor: 'white',
        margin: 10
    }
})

export default styles