import React, { useState } from 'react'
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native'
import Toast from 'react-native-tiny-toast'
import moment from 'moment'

import Headerbar from '../../components/Header'
import Footerbar from '../../components/Footer'
import Loaderbar from '../../components/Loader'
import theme from '../../components/Theme'
import styles from './styles'
import { Get } from '../../utils/axios'

const initialState = {
    isTab: 1,
    data: [],
    isClear: true,
    isLoading: false
}

const APIPage = props => {

    const [
        { isTab, data, isClear, isLoading },
        setState
    ] = useState(initialState)

    const clearState = () => {
        setState({ ...initialState })
    }

    const onAddress = () => {
        let number = data.results[0].location.street.number,
        name = data.results[0].location.street.name,
        city = data.results[0].location.city,
        state = data.results[0].location.state,
        country = data.results[0].location.country,
        postcode = data.results[0].location.postcode

        return number + ' ' + name + ' ' + city + ' ' + state + ' ' + country + ' ' + postcode
    }

    const getData = () => {
        let params = {
            url: 'https://randomuser.me',
            endpoint: '/api'
        }
    
        Get(params)
        .then(json => {
            Toast.showSuccess('Success')
            setState(prevState => ({ 
                ...prevState,
                data: json,
                isClear: false,
                isLoading: false
            }))
        })
        .catch(error => console.log(error))
    }

    return (
        <View style={theme.container}>
            <Headerbar
                subPage={true}
                title='API PAGE'
                nav={props.navigation}
            />
            <ScrollView 
                showsVerticalScrollIndicator={false}
                style={theme.scroller}
            >
                <View style={theme.btnContainer}>
                    <TouchableOpacity 
                        style={theme.btn}
                        onPress={() => {
                            setState(prevState => ({ ...prevState, isLoading: true }))
                            setTimeout(() => {
                                getData()
                            }, 2000)
                        }}
                    >
                        <Text style={theme.btnTxt}>Get new information</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        disabled={isClear}
                        style={isClear ? theme.disBtn : theme.btn}
                        onPress={() => clearState()}
                    >
                        <Text style={theme.btnTxt}>Clear information</Text>
                    </TouchableOpacity>
                </View>
                {isLoading ?
                    <Loaderbar/>
                :
                    <View style={styles.card}>
                        {Object.keys(data).length <= 0 ?
                            <View style={theme.emptyContent}>
                                <Image
                                    style={theme.emptyIcon}
                                    source={require('../../assets/empty.png')}
                                />
                                <Text style={theme.emptyTxt}>ไม่พบข้อมูล</Text>
                            </View>
                        :
                            <View>
                                <Image
                                    style={styles.img}
                                    source={{ uri: data.results[0].picture.thumbnail }}
                                />
                                <Text style={styles.title}>{data.results[0].name.title} {data.results[0].name.first} {data.results[0].name.last}</Text>
                                {moment(data.results[0].registered.date).isValid() && (
                                    <Text style={styles.subTitle}>{moment(data.results[0].registered.date).format('LL')}</Text>
                                )}
                                <View style={styles.tabContainer}>
                                    <TouchableOpacity 
                                        style={[styles.tabContent, { borderTopLeftRadius: 7, borderBottomLeftRadius: 7, backgroundColor: isTab == 1 ? '#CDF0EA' : '#FFF' }]}
                                        onPress={() => setState(prevState => ({ ...prevState, isTab: 1 }))}
                                    >
                                        <Text style={styles.tabTitle}>ข้อมูลทั่วไป</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.tabContent, { borderTopRightRadius: 7, borderBottomRightRadius: 7, backgroundColor: isTab == 2 ? '#CDF0EA' : '#FFF' }]}
                                        onPress={() => setState(prevState => ({ ...prevState, isTab: 2 }))}
                                    >
                                        <Text style={styles.tabTitle}>ที่อยู่</Text>
                                    </TouchableOpacity>
                                </View>
                                {isTab == 1 ?
                                    <View style={styles.container}>
                                        {moment(data.results[0].registered.date).isValid() && (
                                            <View style={styles.content}>
                                                <Image
                                                    style={styles.icon}
                                                    source={require('../../assets/calendar-birthday.png')}
                                                />
                                                <Text style={styles.txt}>{moment(data.results[0].dob.date).format('LL')}</Text>
                                            </View>
                                        )}
                                        <View style={styles.content}>
                                            <Image
                                                style={styles.icon}
                                                source={require('../../assets/birthday.png')}
                                            />
                                            <Text style={styles.txt}>{data.results[0].dob.age}</Text>
                                        </View>
                                        <View style={styles.content}>
                                            <Image
                                                style={styles.icon}
                                                source={require('../../assets/gender.png')}
                                            />
                                            <Text style={styles.txt}>{data.results[0].gender}</Text>
                                        </View>
                                    </View>
                                :
                                    <View style={styles.container}>
                                        <View style={styles.content}>
                                            <Image
                                                style={styles.icon}
                                                source={require('../../assets/email.png')}
                                            />
                                            <Text style={styles.txt}>{data.results[0].email}</Text>
                                        </View>
                                        <View style={styles.content}>
                                            <Image
                                                style={styles.icon}
                                                source={require('../../assets/call.png')}
                                            />
                                            <Text style={styles.txt}>{data.results[0].phone}</Text>
                                        </View>
                                        <View style={styles.content}>
                                            <Image
                                                style={styles.icon}
                                                source={require('../../assets/call.png')}
                                            />
                                            <Text style={styles.txt}>{data.results[0].cell}</Text>
                                        </View>
                                        <View style={styles.content}>
                                            <Image
                                                style={styles.icon}
                                                source={require('../../assets/location.png')}
                                            />
                                            <Text style={styles.txt}>{onAddress()}</Text>
                                        </View>
                                    </View>
                                }
                            </View>
                        }
                    </View>
                }
            </ScrollView>
            <Footerbar
                page='API'
                nav={props.navigation}
            />
        </View>
    )
}

export default APIPage