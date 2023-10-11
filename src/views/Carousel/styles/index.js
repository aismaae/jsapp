import { StyleSheet } from 'react-native'

const styles =  StyleSheet.create({
    card: { 
        width: 200, 
        backgroundColor: '#CDF0EA', 
        borderRadius: 10, 
        marginTop: 30 
    },
    img: { 
        width: 200, 
        height: 200, 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10 
    },
    content: { 
        width: '90%', 
        alignSelf: 'center', 
        marginVertical: 10 
    },
    title: {
        fontSize: 16
    },
    txt: {
        fontSize: 12,
        color: 'gray' 
    }
})

export default styles