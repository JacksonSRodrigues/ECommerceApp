import React, { Component, useState, useEffect } from 'react'
import { View, Animated } from 'react-native'
import { SearchBar as SearchBarOriginal } from 'react-native-elements'
import styles from './SearchBar.styles'

export const SEARCH_BAR_HEIGHT = 55

type SearchBarProps = {
    style: any
    placeHolder: string,
    value: string,
    onChangeText: (text: string) => void,
}

export class SearchBar extends Component<SearchBarProps, any> {
    render() {
        const { style, ...otherProps } = this.props
        return (
            <View style={style || { flex: 1 }}>
                <SearchBarOriginal
                    platform={'default'}
                    lightTheme={true}
                    containerStyle={styles.originalSearchBarContainerStyle}
                    inputContainerStyle={styles.originalSearchInputContainerStyle}
                    round={false}
                    placeholder={'Search'}
                    {...otherProps} />
            </View>
        )
    }
}

export default SearchBar


export const useAutoHideSearchBar = (
    originalSearchHeight: number = SEARCH_BAR_HEIGHT,
    isHidden: boolean = false
): [Animated.Value, (isHidden: boolean) => void] => {
    const [searchBarHeight, setSearchBarHeight] = useState(new Animated.Value(0))
    const [isSearchBarHidden, setIsSearchBarHidden] = useState(isHidden)

    useEffect(() => {
        Animated.timing(searchBarHeight, {
            duration: 100,
            toValue: isSearchBarHidden ? 0 : SEARCH_BAR_HEIGHT,
            useNativeDriver: false
        }).start()
    }, [isSearchBarHidden])

    return [searchBarHeight, setIsSearchBarHidden]
}
export const AnimatedSearchBar = Animated.createAnimatedComponent(SearchBar)
