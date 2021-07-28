import { compact } from 'lodash'
import React from 'react'
import { View } from 'react-native'
import styles from './ModalStyleView.styles'

const ModalStyleView = (props: any) => {
    return (
        <View style={styles.modalStyle}>
            {props.children}
        </View>
    )
}

export default ModalStyleView
