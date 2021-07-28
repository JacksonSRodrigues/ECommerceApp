import { useState, useEffect } from 'react'
import { Animated } from 'react-native'

export const useResizeAnimation = (
    originalHeight: number,
    toHeight: number = 0,
    animationDuration: number = 200,
    isResizedByDefault: boolean = false
): [Animated.Value, (isHidden: boolean) => void] => {
    const [viewHeight, setViewHeight] = useState(new Animated.Value(toHeight))
    const [isViewResized, setIsViewResized] = useState(isResizedByDefault)

    useEffect(() => {
        Animated.timing(viewHeight, {
            duration: animationDuration,
            toValue: isViewResized ? toHeight : originalHeight,
            useNativeDriver: false
        }).start()
    }, [isViewResized])

    return [viewHeight, setIsViewResized]
}