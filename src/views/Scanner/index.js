import React, { useState, useEffect } from 'react'
import { View, ScrollView, Text, Platform } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions'

import Headerbar from '../../components/Header'
import Footerbar from '../../components/Footer'
import theme from '../../components/Theme'
import styles from './styles'

const ScannerPage = props => {

    const [data, setData] = useState(null)

    useEffect(() => {
        checkPermission()
    }, [])

    const checkPermission = () => {        
        check(Platform.OS === 'android' ? PERMISSIONS.ANDROID.CAMERA : PERMISSIONS.IOS.CAMERA)
        .then((result) => {
            switch (result) {
                case RESULTS.UNAVAILABLE:
                    console.log('The permission is UNAVAILABLE')
                    break;
                case RESULTS.DENIED:
                    console.log('The permission is DENIED')
                    break;
                case RESULTS.LIMITED:
                    console.log('The permission is LIMITED')
                    break;
                case RESULTS.GRANTED:
                    console.log('The permission is GRANTED')
                    break;
                case RESULTS.BLOCKED:
                    console.log('The permission is BLOCKED')
                    break;
            }
        })
        .catch((error) => console.log(error))
    }
    
    return (
        <View style={theme.container}>
            <Headerbar
                subPage={true}
                title='SCANNER PAGE'
                nav={props.navigation}
            />
            <ScrollView 
                showsVerticalScrollIndicator={false}
                style={theme.scroller}
            >
                <QRCodeScanner
                    fadeIn={false}
                    reactivate={true}
                    reactivateTimeout={5000}
                    captureAudio={false}
                    checkAndroid6Permissions={true}
                    permissionDialogTitle={'แจ้งเตือน'}
                    permissionDialogMessage={'JS APP ต้องการเข้าถึงกล้อง'}
                    buttonPositive={'ตกลง'}
                    containerStyle={styles.container}
                    cameraStyle={styles.camera}
                    onRead={e => setData(e.data)}
                />
                <Text style={styles.title}>DATA</Text>
                <View style={styles.content}>
                    <Text style={styles.txt}>{data}</Text>
                </View>
            </ScrollView>
            <Footerbar
                page='SCANNER'
                nav={props.navigation}
            />
        </View>
    )
}

export default ScannerPage