import React from 'react'
import { View, StatusBar, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

const Headerbar = props => {
    return (
        <View style={styles.container}>
            <StatusBar
                translucent={true}
                barStyle={'light-content'}
                // backgroundColor={'rgba(0,0,0,0)'}
            />
            <TouchableOpacity
                disabled={props.subPage ? false : true}
                style={[styles.arrow, { borderBottomLeftRadius: 25 }]}
                onPress={() =>  props.subPage ? props.nav.goBack() : null}
            >
                <Image
                    style={styles.icon}
                    source={
                        props.subPage ? 
                            require('../../assets/back.png')
                        : require('../../assets/menu.png')
                    }
                />
            </TouchableOpacity>
            <View style={styles.content}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            {props.subPage ? 
                <View style={[styles.arrow, { borderBottomRightRadius: 25 }]}/>
            : 
                <TouchableOpacity
                    disabled={true}
                    style={[styles.arrow, { borderBottomRightRadius: 25 }]}
                >
                    <Image
                        style={styles.bell}
                        source={require('../../assets/bell.png')}
                    />
                </TouchableOpacity>
            }
        </View>
    )
}

const styles =  StyleSheet.create({
    container: { 
        width: '100%', 
        height: 90,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        backgroundColor: '#C490E4', 
        borderBottomLeftRadius: 25, 
        borderBottomRightRadius: 25 
    },
    content: { 
        height: 55, 
        justifyContent: 'center'
    },
    arrow: { 
        width: 55,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        color: '#FFF'
    },
    icon: { 
        width: 35, 
        height: 35, 
        tintColor: '#FFF' 
    },
    bell: { 
        width: 25, 
        height: 25, 
        tintColor: '#FFF' 
    }
})

export default Headerbar