import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Dashboard from '../screens/Dashboard/Dashboard'
import AllProducts from '../screens/AllProducts/AllProducts'
import { Icon } from 'react-native-elements'
import { Text, View, StyleSheet } from 'react-native'

export const SCREEN = {
    DASHBOARD: 'Dashboard',
    ALL_PRODUCTS: 'AllProducts'
}

const Stack = createStackNavigator()

const AppNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerTintColor: 'red' }}
            initialRouteName={SCREEN.DASHBOARD}>
            <Stack.Screen
                name={SCREEN.DASHBOARD}
                component={Dashboard}
            />
            <Stack.Screen
                name={SCREEN.ALL_PRODUCTS}
                component={AllProducts}
            />
        </Stack.Navigator>
    )
}

export default AppNavigation