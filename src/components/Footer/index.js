import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'

const Footerbar = props => {

    const onChangePage = (page) => {
        props.nav.navigate(page)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={[styles.content, { borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }]}
                onPress={() => onChangePage('HomePage')}
            >
                <Image
                    style={props.page == 'HOME' ? styles.activeIcon : styles.icon}
                    source={require('../../assets/user.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.content}
                onPress={() => onChangePage('APIPage')}
            >
                <Image
                    style={props.page == 'API' ? styles.activeIcon : styles.icon}
                    source={require('../../assets/api.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.content}
                onPress={() => onChangePage('MapPage')}
            >
                <Image
                    style={props.page == 'MAP' ? styles.activeIcon : styles.icon}
                    source={require('../../assets/map.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.content}
                onPress={() => onChangePage('ScannerPage')}
            >
                <Image
                    style={props.page == 'SCANNER' ? styles.activeIcon : styles.icon}
                    source={require('../../assets/scanner.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.content, { borderTopRightRadius: 20, borderBottomRightRadius: 20 }]}
                onPress={() => onChangePage('SettingsPage')}
            >
                <Image
                    style={props.page == 'SETTINGS' ? styles.activeIcon : styles.icon}
                    source={require('../../assets/settings.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles =  StyleSheet.create({
    container: { 
        width: '95%', 
        height: 65, 
        backgroundColor: '#C490E4',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 15, 
        borderRadius: 20 
    },
    content: {
        width: '20%',
        height: 65,
        alignItems: 'center',
        justifyContent: 'center'
    },
    activeIcon: { 
        width: 35, 
        height: 35, 
        tintColor: '#000' 
    },
    icon: { 
        width: 25, 
        height: 25, 
        tintColor: '#FFF' 
    }
})

export default Footerbar