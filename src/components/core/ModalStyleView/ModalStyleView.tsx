import { compact } from 'lodash'
import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import styles from './ModalStyleView.styles'


type ModalStyleViewProps = {
    onOutsideClick: () => void
    children: any
}

const ModalStyleView = (props: ModalStyleViewProps) => {
    return (
        <View style={styles.modalStyle}>
            <TouchableOpacity style={{ flexGrow: 1 }} onPress={props.onOutsideClick} />
            {props.children}
        </View>
    )
}

export default ModalStyleView
