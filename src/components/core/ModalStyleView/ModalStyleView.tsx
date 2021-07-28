import React from 'react'
import { View } from 'react-native'

const ModalStyleView = (props: any) => {
    return (
        <View style={{ flex: 1, flexGrow: 1, flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.3)' }}>
            {props.children}
        </View>
    )
}

export default ModalStyleView
