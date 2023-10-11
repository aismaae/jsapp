import React from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'

import Headerbar from '../../components/Header'
import Footerbar from '../../components/Footer'
import theme from '../../components/Theme'
import styles from './styles'

const MapPage = props => {

    return (
        <View style={theme.container}>
            <Headerbar
                subPage={true}
                title='MAP PAGE'
                nav={props.navigation}
            />
            <View style={styles.content}>
                <MapView
                    style={styles.container}
                    // provider={PROVIDER_GOOGLE}
                    mapType='standard'
                    initialRegion={{
                        latitude: 13.7655933,
                        longitude: 100.6083957,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01
                    }}
                />
            </View>
            <Footerbar
                page='MAP'
                nav={props.navigation}
            />
        </View>
    )
}

export default MapPage