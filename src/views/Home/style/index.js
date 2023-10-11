import { StyleSheet } from 'react-native'

const styles =  StyleSheet.create({
    content: { 
        width: '95%', 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        alignSelf: 'center', 
        alignItems: 'center', 
        justifyContent: 'space-around', 
        marginTop: 10 
    },
    block: { 
        width: '45%', 
        height: 150, 
        alignSelf: 'center', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#fff', 
        borderRadius: 10, 
        marginTop: 15 
    },
    icon: { 
        width: 50, 
        height: 50,
        tintColor: '#C490E4'
    },
    title: { 
        fontSize: 18, 
        marginVertical: 10,
        color: '#F6C6EA'
    }
})

export default styles