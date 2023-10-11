import { StyleSheet } from 'react-native'

const styles =  StyleSheet.create({
    card: { 
        width: '90%', 
        backgroundColor: '#FFF', 
        alignSelf: 'center', 
        borderRadius: 15, 
        marginVertical: 15 
    },
    img: { 
        width: 70, 
        height: 70, 
        borderRadius: 35, 
        alignSelf: 'center', 
        marginVertical: 15 
    },
    title: { 
        fontSize: 16, 
        textAlign: 'center' 
    },
    subTitle: { 
        fontSize: 14, 
        textAlign: 'center' 
    },
    txt: { 
        fontSize: 16, 
        color: '#333', 
        marginLeft: 10 
    },
    icon: { 
        width: 25, 
        height: 25, 
        tintColor: '#F6C6EA' 
    },
    container: { 
        width: '90%', 
        alignSelf: 'center', 
        marginVertical: 10 
    },
    content: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginVertical: 5 
    },
    tabContainer: { 
        width: '90%', 
        flexDirection: 'row', 
        alignSelf: 'center', 
        marginVertical: 10 
    },
    tabContent: { 
        width: '50%', 
        height: 30, 
        borderWidth: 1, 
        borderColor: '#CDF0EA', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    tabTitle: { 
        fontSize: 14, 
        color: '#333' 
    }
})

export default styles