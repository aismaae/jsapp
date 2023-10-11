import React, { PureComponent } from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomePage from '../views/Home'
import APIPage from '../views/API'
import FormPage from '../views/Form'
import MapPage from '../views/Map'
import CarouselPage from '../views/Carousel'
import ScannerPage from '../views/Scanner'
import VideoPage from '../views/Video'
import ListPage from '../views/List'
import SettingsPage from '../views/Settings'

const Stack = createStackNavigator()

class ProviderRoot extends PureComponent {

    render() {
        return (
            <NavigationContainer>
                <StatusBar
                    barStyle='dark-content'
                    backgroundColor='rgba(255,255,255,1)'
                />
                <Stack.Navigator>
                    <Stack.Screen 
                        name='HomePage' 
                        component={HomePage} 
                        options={{ headerShown: false }} 
                    />
                    <Stack.Screen 
                        name='APIPage'
                        component={APIPage} 
                        options={{ headerShown: false }} 
                    />
                    <Stack.Screen 
                        name='FormPage'
                        component={FormPage} 
                        options={{ headerShown: false }} 
                    />
                    <Stack.Screen 
                        name='MapPage'
                        component={MapPage} 
                        options={{ headerShown: false }} 
                    />
                    <Stack.Screen 
                        name='CarouselPage'
                        component={CarouselPage} 
                        options={{ headerShown: false }} 
                    />
                    <Stack.Screen 
                        name='ScannerPage'
                        component={ScannerPage} 
                        options={{ headerShown: false }} 
                    />
                    <Stack.Screen 
                        name='VideoPage'
                        component={VideoPage} 
                        options={{ headerShown: false }} 
                    />
                    <Stack.Screen 
                        name='ListPage'
                        component={ListPage} 
                        options={{ headerShown: false }} 
                    />
                    <Stack.Screen 
                        name='SettingsPage'
                        component={SettingsPage} 
                        options={{ headerShown: false }} 
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default ProviderRoot