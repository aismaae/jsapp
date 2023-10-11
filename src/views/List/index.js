import React, { useState } from 'react'
import { View, ScrollView, FlatList, Text, TouchableOpacity, Image } from 'react-native'

import Headerbar from '../../components/Header'
import Footerbar from '../../components/Footer'
import theme from '../../components/Theme'
import styles from './styles'
import { openLink } from '../../utils/helper'
import { dataList } from './data'

const initialState = {
    isOpen: 0
}

const ListPage = props => {

    const [
        { isOpen },
        setState
    ] = useState(initialState)

    return (
        <View style={theme.container}>
            <Headerbar
                subPage={true}
                title='LIST PAGE'
                nav={props.navigation}
            />
            <ScrollView 
                showsVerticalScrollIndicator={false}
                style={theme.scroller}
            >
                <FlatList
                    data={dataList.filter(item => { 
                        if(item.isShow) {
                            return item
                        }
                    })}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => JSON.stringify(item.id)}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity 
                            key={index}
                            style={styles.card}
                            onPress={() => 
                                setState(prevState => ({ 
                                    ...prevState,
                                    isOpen: isOpen != item.id ? item.id : 0
                                }))
                            }
                        >
                            <View style={styles.content}>
                                <Text style={styles.title}>{item.lib}</Text>
                                <Text style={styles.subTitle}>Version: {item.version}</Text>
                                {isOpen == item.id && (
                                    <View>
                                        <Text 
                                            numberOfLines={1}
                                            style={styles.subTitle}
                                        >
                                            Url: 
                                            <Text 
                                                style={styles.txtUrl}
                                                onPress={() => openLink(item.url)}
                                            > {item.url}</Text>
                                        </Text>
                                        {Object.keys(item.pageUse).length > 0 && (
                                            <Text style={styles.subTitle}>Page: </Text>
                                        )}
                                        <View style={styles.box}>
                                            {Object.keys(item.pageUse).map(value => {
                                                return(
                                                    <Text style={[styles.txt, { marginTop: value == 0 ? 10 : 0, marginBottom: value == Object.keys(item.pageUse).length - 1 ? 10 : 0 }]}>
                                                        - {item.pageUse[value]}
                                                    </Text>
                                                )
                                            })}
                                        </View>
                                    </View>
                                )}
                                <Image
                                    style={styles.icon}
                                    source={
                                        isOpen == item.id ?
                                            require('../../assets/up.png')
                                        : require('../../assets/down.png')
                                    }
                                />
                            </View>
                        </TouchableOpacity>
                    }
                />
            </ScrollView>
            <Footerbar
                page='LIST'
                nav={props.navigation}
            />
        </View>
    )
}

export default ListPage