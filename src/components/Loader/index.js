import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Placeholder, PlaceholderMedia, PlaceholderLine, Shine } from 'rn-placeholder'

const Loaderbar = props => {
    return (
        <View style={styles.container}>
            {props.type == 'square' ?
                <View style={styles.square}>
                    <Placeholder Animation={Shine}>
                        <PlaceholderMedia style={styles.squareMedia} />
                        <PlaceholderLine style={styles.squareTitle} />
                        <PlaceholderLine style={styles.squareTxt}/>
                    </Placeholder>
                </View>
            :
                <View style={styles.card}>
                    <View style={styles.content}>
                        <Placeholder 
                            Animation={Shine}
                            Right={PlaceholderMedia}
                        >
                            <PlaceholderLine width={80} />
                            <PlaceholderLine />
                        </Placeholder>
                        <View style={styles.cardLine} />
                        <Placeholder 
                            Animation={Shine}
                            Left={PlaceholderMedia}
                        >
                            <PlaceholderLine width={80} />
                            <PlaceholderLine />
                        </Placeholder>
                    </View>
                </View>
            }
        </View>
    )
}

const styles =  StyleSheet.create({
    container: { 
        flex: 1,
        width: '100%',
        marginTop: 10
    },
    content: {
        width: '95%',
        marginTop: 10
    },
    card: {
        width:'90%',
        alignSelf:'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 1,
        shadowOffset: { 
            width: 0.1,
            height: 0.1
        },
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        marginTop: 6,
        marginBottom: 12
    },
    cardLine: {
        width: '100%',
        height: 1,
        backgroundColor: '#EBEBEB',
        marginBottom: 10
    },
    square: { 
        width: 200,
        height: 250,
        backgroundColor: '#FFF',
        alignSelf: 'center',
        borderRadius: 10, 
        marginTop: 30
    },
    squareMedia: { 
        width: 200, 
        height: 200, 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10
    },
    squareTitle: { 
        width: '60%',
        marginTop: 10, 
        marginLeft: 10
    },
    squareTxt: { 
        width: '40%',
        marginTop: -5, 
        marginLeft: 10
    }
})

export default Loaderbar