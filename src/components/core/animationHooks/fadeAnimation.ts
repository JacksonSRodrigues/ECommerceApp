import { useEffect, useState, useRef } from 'react'
import { Animated } from 'react-native'

type fadeAnimationOptions = {
    isHiddenByDefault?: boolean
    delay?: number,
    duration?: number,
    fadeInDelay?: number
    fadeInDuration?: number,
    fadeOutDelay?: number,
    fadeOutDuration?: number
}

export const useFadeAnimation = (
    toOpacity: number,
    originalOpacity: number,
    options: fadeAnimationOptions = {}
): [Animated.Value, (isHidden: boolean) => void] => {
    const { duration = 200, delay = 0, isHiddenByDefault = false } = options
    const { fadeInDuration = duration, fadeInDelay = delay } = options
    const { fadeOutDuration = duration, fadeOutDelay = delay } = options

    const opacityAnimation = useRef(new Animated.Value(toOpacity)).current
    const [isViewHidden, setIsViewHidden] = useState(isHiddenByDefault)

    useEffect(() => {
        Animated.timing(opacityAnimation, {
            duration: isViewHidden ? fadeOutDuration : fadeInDuration,
            delay: isViewHidden ? fadeOutDelay : fadeInDelay,
            toValue: isViewHidden ? toOpacity : originalOpacity,
            useNativeDriver: false
        }).start()
    }, [isViewHidden])

    return [opacityAnimation, setIsViewHidden]
}