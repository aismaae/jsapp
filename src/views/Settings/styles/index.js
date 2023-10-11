import { StyleSheet } from 'react-native'

const styles =  StyleSheet.create({
    content: { 
        width: '100%', 
        height: 60, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        borderBottomColor: '#CDF0EA', 
        borderBottomWidth: 1
    },
    title: { 
        fontSize: 16, 
        marginLeft: 10 
    },
    txt: { 
        fontSize: 14, 
        marginRight: 10,
        color: '#C490E4'
    },
    icon: { 
        width: 25, 
        height: 25, 
        margin: 10, 
        tintColor: '#C490E4'
    },
    row: { 
        flexDirection: 'row' 
    },
    langContent: { 
        width: 55, 
        flexDirection: 'row', 
        marginRight: 10, 
        borderWidth: 1, 
        borderRadius: 5, 
        borderColor: '#C490E4'
    },
    langLeft: { 
        width: '50%', 
        height: 30, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderTopLeftRadius: 5, 
        borderBottomLeftRadius: 5
    },
    langRight: { 
        width: '50%', 
        height: 30, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderTopRightRadius: 5, 
        borderBottomRightRadius: 5
    },
    langTxt: { 
        fontSize: 16
    }
})

export default styles