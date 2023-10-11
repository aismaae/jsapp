import React, {useState} from 'react'
import { View, ScrollView, Text, TouchableOpacity, Switch, Image } from 'react-native'
import call from 'react-native-phone-call'
import openMap from 'react-native-open-maps'

import Headerbar from '../../components/Header'
import Footerbar from '../../components/Footer'
import theme from '../../components/Theme'
import styles from './styles'
import { openLink } from '../../utils/helper'

const SettingsPage = props => {
    const [isNotif, setNotif] = useState(false)
    const [isLang, setLang] = useState('EN')

    const toggleSwitch = () => setNotif(previousState => !previousState)

    return (
        <View style={theme.container}>
            <Headerbar
                subPage={true}
                title={isLang == 'TH' ? 'ตั้งค่า' : 'SETTINGS PAGE'}
                nav={props.navigation}
            />
            <ScrollView 
                showsVerticalScrollIndicator={false}
                style={theme.scroller}
            >
                <View style={styles.content}>
                    <Text style={styles.title}>{isLang == 'TH' ? 'ภาษา' : 'Language'}</Text>
                    <View style={styles.langContent}>
                        <TouchableOpacity 
                            style={[styles.langLeft, { backgroundColor: isLang == 'TH' ? '#C490E4' : '#FFF' }]}
                            onPress={() => setLang('TH')}
                        >
                            <Text style={[styles.langTxt, { color: isLang == 'TH' ? '#FFF' : '#C490E4' }]}>TH</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.langRight, { backgroundColor: isLang == 'EN' ? '#C490E4' : '#FFF' }]}
                            onPress={() => setLang('EN')}
                        >
                            <Text style={[styles.langTxt, { color: isLang == 'EN' ? '#FFF' : '#C490E4' }]}>EN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>{isLang == 'TH' ? 'การแจ้งเตือน' : 'Notification'}</Text>
                    <Switch
                        trackColor={{false: '#767577', true: '#C490E4'}}
                        thumbColor={isNotif ? '#CDF0EA' : '#f4f3f4'}
                        style={{ marginRight: 10 }}
                        ios_backgroundColor='#767577'
                        onValueChange={toggleSwitch}
                        value={isNotif}
                    />
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>{isLang == 'TH' ? 'เวอร์ชั่น' : 'Version'}</Text>
                    <Text style={styles.txt}>0.1.0</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>{isLang == 'TH' ? 'เกี่ยวกับเรา' : 'About us'}</Text>
                    <TouchableOpacity onPress={() => openLink('https://github.com/aismaae')}>
                        <Image
                            style={styles.icon}
                            source={require('../../assets/github.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>{isLang == 'TH' ? 'ติดต่อเรา' : 'Contact us'}</Text>
                    <View style={styles.row}>
                        <TouchableOpacity 
                            onPress={() => call({ number: '0987654321', prompt: false, skipCanOpen: true }).catch(console.error)}
                        >
                            <Image
                                style={styles.icon}
                                source={require('../../assets/call.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => openMap({ latitude: 37.865101, longitude: -119.538330 })}
                        >
                            <Image
                                style={styles.icon}
                                source={require('../../assets/location.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <Footerbar
                page='SETTINGS'
                nav={props.navigation}
            />
        </View>
    )
}

export default SettingsPage