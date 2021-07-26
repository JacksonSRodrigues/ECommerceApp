import React, { Component } from 'react'
import { View, Animated } from 'react-native'
import { SearchBar as SearchBarOriginal } from 'react-native-elements'
import styles from './SearchBar.styles'

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


export const AnimatedSearchBar = Animated.createAnimatedComponent(SearchBar)
