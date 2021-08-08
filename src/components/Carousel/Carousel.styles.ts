import { StyleSheet } from 'react-native';

export const carouselStyles = StyleSheet.create({
    carousel: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
    },
    pagination: {
        position: 'absolute',
        bottom: 0
    },
    inactiveDotStyle: {
        width: 7,
        height: 7,
        borderRadius: 7,
        marginHorizontal: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    paginationDotStyle: {
        width: 12,
        height: 7,
        borderRadius: 7,
        backgroundColor: 'rgba(0, 0, 0, 0.35)'
    }
})

export const carouselItemStyles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    }
})