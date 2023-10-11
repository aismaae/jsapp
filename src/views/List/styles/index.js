import { StyleSheet } from 'react-native'

const styles =  StyleSheet.create({
    card: { 
        width: '90%', 
        alignSelf: 'center', 
        marginVertical: 5,
        backgroundColor: '#CDF0EA', 
        borderRadius: 10 
    },
    content: { 
        width: '90%', 
        alignSelf: 'center', 
        marginVertical: 10 
    },
    title: { 
        fontSize: 16,
        color: '#C490E4'
    },
    subTitle: { 
        fontSize: 14
    },
    box: { 
        width: '100%', 
        backgroundColor: '#FFF', 
        alignSelf: 'center', 
        borderRadius: 5, 
        marginTop: 5 
    },
    txt: { 
        fontSize: 14, 
        marginLeft: 10
    },
    txtUrl: {
        color: '#609AFF'
    },
    icon: { 
        width: 20, 
        height: 20,
        marginTop: 10,
        alignSelf: 'center' 
    }
})

export default styles