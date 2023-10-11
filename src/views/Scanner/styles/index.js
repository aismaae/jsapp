import { StyleSheet, Dimensions } from 'react-native'

const styles =  StyleSheet.create({
    container: {
        alignItems: 'center',
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10
    },
    camera: {
        width: Dimensions.get('window').width - 50,
        height: Dimensions.get('window').width - 50,
        overflow: 'hidden',
        marginVertical: 40,
        borderRadius: 15
    },
    content: { 
        width: '90%', 
        height: 200, 
        alignSelf: 'center', 
        borderRadius: 15, 
        borderWidth: 1, 
        borderColor: '#F6C6EA' 
    },
    title: { 
        fontSize: 16, 
        textAlign: 'center', 
        marginBottom: 15 
    },
    txt: { 
        fontSize: 14, 
        margin: 15 
    }
})

export default styles