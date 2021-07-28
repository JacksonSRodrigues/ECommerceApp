import { compact } from 'lodash'
import React from 'react'
import { Animated, View, TouchableOpacity } from 'react-native'
import styles from './ModalStyleView.styles'
import { useFadeAnimation } from '../animationHooks/fadeAnimation'


type ModalStyleViewProps = {
    onOutsideClick: () => void
    children: any
}

const ModalStyleView = (props: ModalStyleViewProps) => {
    const [opacity, setIsHidden] = useFadeAnimation(0, 1, {
        fadeInDelay: 300,
        fadeInDuration: 300,
        fadeOutDelay: 0,
        fadeOutDuration: 10
    })
    return (
        <View style={styles.containerStyle}>
            <Animated.View style={{ ...styles.modalBgStyle, opacity: opacity }}>
                <TouchableOpacity style={{ flexGrow: 1 }} onPress={() => {
                    setIsHidden(true)
                    props?.onOutsideClick?.()
                }} />
            </Animated.View>

            {props.children}
        </View>
    )
}

export default ModalStyleView
