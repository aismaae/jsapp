import { StyleSheet } from 'react-native'

//'#CDF0EA' '#F9F9F9' '#F6C6EA' '#C490E4'

const theme =  StyleSheet.create({
    container: { 
        width: '100%',
        height: '100%',
        backgroundColor: '#F9F9F9'
    },
    scroller: { 
        width: '100%', 
        height: '100%' 
    },
    btnContainer: { 
        width: '90%', 
        flexDirection: 'row', 
        alignSelf: 'center', 
        justifyContent: 'space-between' 
    },
    btn: { 
        width: '47%', 
        height: 45, 
        backgroundColor: '#F6C6EA', 
        alignSelf: 'center', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 10, 
        marginTop: 20 
    },
    disBtn: { 
        width: '47%', 
        height: 45, 
        backgroundColor: '#C2C1C1', 
        alignSelf: 'center', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 10, 
        marginTop: 20 
    },
    btnTxt: {
        fontSize: 18,
        color: '#FFF' 
    },
    emptyContent: { 
        margin: 20, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    emptyIcon: { 
        width: 50, 
        height: 50, 
        tintColor: '#CCC' 
    },
    emptyTxt: { 
        fontSize: 16, 
        color: '#CCC', 
        margin: 10 
    }
})

export default theme