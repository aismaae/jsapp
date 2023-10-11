import { StyleSheet } from 'react-native'

const styles =  StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    content: { 
        width: '100%', 
        height: '81%', 
        position: 'relative'
    }
})

export default styles