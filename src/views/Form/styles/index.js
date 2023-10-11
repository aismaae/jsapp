import { StyleSheet } from 'react-native'

const styles =  StyleSheet.create({
    content: { 
        width: '90%', 
        alignSelf: 'center',
        marginBottom: 30
    },
    title: {
        fontSize: 16,
        color: '#C490E4',
        marginVertical: 10
    },
    subTitle: { 
        color: 'red' 
    },
    inputBox: { 
        width: '100%', 
        height: 45,
        backgroundColor: '#FFF',
        borderWidth: 1, 
        borderRadius: 5, 
        borderColor: '#F6C6EA', 
        fontSize: 16, 
        paddingHorizontal: 10
    },
    inputArea: { 
        width: '100%', 
        height: 100,
        backgroundColor: '#FFF',
        borderWidth: 1, 
        borderRadius: 5, 
        borderColor: '#F6C6EA', 
        fontSize: 16, 
        paddingHorizontal: 10 
    },
    imgContent: { 
        width: 80, 
        height: 80, 
        backgroundColor: '#C490E4', 
        alignSelf: 'center', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 30, 
        marginBottom: 20, 
        borderWidth: 3, 
        borderRadius: 40, 
        borderColor: '#F6C6EA'
    },
    imgDef: { 
        width: 70, 
        height: 70,
        tintColor: '#FFF'
    },
    img: { 
        width: 70, 
        height: 70,
        borderRadius: 35
    },
    imgEdit: { 
        width: 25, 
        height: 25, 
        position: 'absolute', 
        alignSelf: 'flex-end', 
        bottom: 0, 
        backgroundColor: '#C490E4', 
        borderRadius: 12.5, 
        tintColor: '#FFF' 
    }
})

export default styles