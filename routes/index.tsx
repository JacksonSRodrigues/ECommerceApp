import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Dashboard from '../screens/Dashboard/Dashboard'
import AllProducts from '../screens/AllProducts/AllProducts'
import { Icon } from 'react-native-elements'
import { Text, View, StyleSheet } from 'react-native'
const Stack = createStackNavigator()

const AppNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerTintColor: 'red' }} initialRouteName={'Dashboard'}>
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
            />
            <Stack.Screen
                name="AllProducts"
                component={AllProducts}
            />
        </Stack.Navigator>
    )
}

export default AppNavigation