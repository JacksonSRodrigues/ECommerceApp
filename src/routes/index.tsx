import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Dashboard from '../screens/Dashboard/Dashboard'
import AllProducts from '../screens/AllProducts/AllProducts'
import AddOrEditAddress from '../screens/AddOrEditAddress/AddOrEditAddress'
import { Icon } from 'react-native-elements'
import { Text, View, StyleSheet } from 'react-native'

export const SCREEN = {
    CORE: 'Core',
    APP_MODALS: 'AppModals',
    DASHBOARD: 'Dashboard',
    ALL_PRODUCTS: 'AllProducts',
    ADD_OR_EDIT_ADDRESS: 'AddOrEditAddress'
}

const CoreStack = createStackNavigator()
const CoreNavigation = () => {
    return (
        <CoreStack.Navigator
            screenOptions={{ headerTintColor: 'red' }}
            initialRouteName={SCREEN.DASHBOARD}>
            <CoreStack.Screen
                name={SCREEN.DASHBOARD}
                component={Dashboard}
            />
            <CoreStack.Screen
                name={SCREEN.ALL_PRODUCTS}
                component={AllProducts}
            />
        </CoreStack.Navigator>
    )
}

const RootStack = createStackNavigator()
const AppNavigation = () => {
    return (
        <RootStack.Navigator
            mode={'modal'}
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: 'transparent' }
            }}
        >
            <RootStack.Screen
                name={SCREEN.CORE}
                component={CoreNavigation}
            />
        </RootStack.Navigator>
    )

}



export default AppNavigation