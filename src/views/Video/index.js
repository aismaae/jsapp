import React from 'react'
import { View, ScrollView } from 'react-native'

import Headerbar from '../../components/Header'
import Footerbar from '../../components/Footer'
import Loaderbar from '../../components/Loader'
import theme from '../../components/Theme'

const VideoPage = props => {

    
    return (
        <View style={theme.container}>
            <Headerbar
                subPage={true}
                title='VIDEO PAGE'
                nav={props.navigation}
            />
            <ScrollView 
                showsVerticalScrollIndicator={false}
                style={theme.scroller}
            >
            </ScrollView>
            <Footerbar
                page='VIDEO'
                nav={props.navigation}
            />
        </View>
    )
}

export default VideoPage