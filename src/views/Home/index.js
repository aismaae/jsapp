import React, { Component } from 'react'
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native'

import Headerbar from '../../components/Header'
import Footerbar from '../../components/Footer'
import theme from '../../components/Theme'
import styles from './style'
import { openLink } from '../../utils/helper'
// PINCODE

class HomePage extends Component {

    onChangePage(page) {
        this.props.navigation.navigate(page)
    }

    render() {
        return (
            <View style={theme.container}>
                <Headerbar
                    title='HOME PAGE'
                    nav={this.props.navigation}
                />
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    style={theme.scroller}
                >
                    <View style={styles.content}>
                        <TouchableOpacity
                            style={styles.block}
                            onPress={() => this.onChangePage('APIPage')}
                        >
                            <Image
                                style={styles.icon}
                                source={require('../../assets/api.png')}
                            />
                            <Text style={styles.title}>API</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.block}
                            onPress={() => this.onChangePage('FormPage')}
                        >
                            <Image
                                style={styles.icon}
                                source={require('../../assets/form.png')}
                            />
                            <Text style={styles.title}>FORM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.block}
                            onPress={() => this.onChangePage('MapPage')}
                        >
                            <Image
                                style={styles.icon}
                                source={require('../../assets/map.png')}
                            />
                            <Text style={styles.title}>MAP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.block}
                            onPress={() => this.onChangePage('CarouselPage')}
                        >
                            <Image
                                style={styles.icon}
                                source={require('../../assets/carousel.png')}
                            />
                            <Text style={styles.title}>CAROUSEL</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.block}
                            onPress={() => this.onChangePage('ScannerPage')}
                        >
                            <Image
                                style={styles.icon}
                                source={require('../../assets/scanner.png')}
                            />
                            <Text style={styles.title}>SCANNER</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity
                            style={styles.block}
                            onPress={() => this.onChangePage('VideoPage')}
                        >
                            <Image
                                style={styles.icon}
                                source={require('../../assets/video.png')}
                            />
                            <Text style={styles.title}>VIDEO</Text>
                        </TouchableOpacity> */}
                        <TouchableOpacity
                            style={styles.block}
                            onPress={() => openLink('https://github.com/aismaae')}
                        >
                            <Image
                                style={styles.icon}
                                source={require('../../assets/internet.png')}
                            />
                            <Text style={styles.title}>OPEN LINK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.block}
                            onPress={() => this.onChangePage('ListPage')}
                        >
                            <Image
                                style={styles.icon}
                                source={require('../../assets/list.png')}
                            />
                            <Text style={styles.title}>COMPONENT</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <Footerbar
                    page='HOME'
                    nav={this.props.navigation}
                />
            </View>
        )
    }
}

export default HomePage