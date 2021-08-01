import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    mainBackground: {
        backgroundColor: 'white'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10
    },
    headerTitle: {
        fontWeight: '300',
        fontSize: 20
    },
    productItemsBg: {
        backgroundColor: 'white',
        margin: 5,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    seeMoreContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 5
    }
})

export default styles