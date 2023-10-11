import React, { useState, useEffect } from 'react'
import { View, ScrollView, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions'
import { launchImageLibrary } from 'react-native-image-picker'
import DropDownPicker from 'react-native-dropdown-picker'
import DatePicker from 'react-native-date-picker'
import moment from 'moment'

import Headerbar from '../../components/Header'
import Footerbar from '../../components/Footer'
import theme from '../../components/Theme'
import styles from './styles'

const initialState = {
    name: '',
    lastName: '',
    gender: null,
    dob: new Date(),
    email: '',
    phone: '',
    address: '',
    isInput: false,
    isCheck: false,
    img: '',
    dataGenser: [
        { value: 1, label: 'ชาย' },
        { value: 2, label: 'หญิง' }
    ],
    isGender: false,
    isDOB: false
}

const FormPage = props => {

    const [
        { 
            name, lastName, dob, email, phone, address, 
            isInput, isCheck, img, isGender, dataGenser, isDOB
        },
        setState
    ] = useState(initialState)
    const [gender, setGender] = useState(null)

    useEffect(() => {
        checkPermission()
    }, [])

    const clearState = () => {
        setGender(null)
        setState({ ...initialState })
    }

    const onSave = () => {
        let data = {
            'NAME' : name,
            'LASTNAME': lastName,
            'GENDER': gender,
            'DATEOFBIRTH': dob,
            'EMAIL': email,
            'PHONE': phone,
            'ADDRESS': address,
            'IMAGE': img
        }

        Alert.alert(
            'ON SAVE',
            JSON.stringify(data)
        )
    }

    const onInput = (value) => {
        setState(prevState => ({ 
            ...prevState,
            isInput: value
        }))
    }

    const checkPermission = () => {        
        check(Platform.OS === 'android' ? PERMISSIONS.ANDROID.CAMERA : PERMISSIONS.IOS.CAMERA)
        .then((result) => {
            switch (result) {
                case RESULTS.UNAVAILABLE:
                    this.setState({ isCamera: false })
                    break;
                case RESULTS.DENIED:
                    this.setState({ isCamera: false })
                    break;
                case RESULTS.LIMITED:
                    console.log('The permission is limited: some actions are possible');
                    break;
                case RESULTS.GRANTED:
                    this.setState({ isCamera: true })
                    break;
                case RESULTS.BLOCKED:
                    this.setState({ isCamera: false })
                    break;
            }
        })
        .catch((error) => console.log(error))
    }

    const onImagePicker = async () => {
        let options = {
            quality: 0.5,
            maxWidth: 800,
            maxHeight: 800
        }

        try {
            const result = await launchImageLibrary(options)
            const newImageUri = "file:///" + result.assets[0].uri.split("file:/").join("");
            let data = {
                uri: newImageUri,
                type: result.assets[0].type,
                name: result.assets[0].fileName
            }

            setState(prevState => ({ 
                ...prevState,
                img: newImageUri
            }))
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <View style={theme.container}>
            <Headerbar
                subPage={true}
                title='FORM PAGE'
                nav={props.navigation}
            />
            <ScrollView 
                showsVerticalScrollIndicator={false}
                style={theme.scroller}
            >
                <View style={styles.content}>
                    <TouchableOpacity
                        style={styles.imgContent}
                        onPress={() => onImagePicker()}
                    >
                        <Image
                            style={img ? styles.img : styles.imgDef}
                            source={
                                img ? 
                                    { uri: img }
                                : require('../../assets/user.png')
                            }
                        />
                        <Image
                            style={styles.imgEdit}
                            source={require('../../assets/edit.png')}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>
                        <Text style={styles.subTitle}>* </Text>
                        Name
                    </Text>
                    <TextInput
                        value={name}
                        placeholder='Name'
                        style={[styles.inputBox, { borderColor: isCheck && name.trim() == '' ? 'red' : '#F6C6EA' }]}
                        onBlur={() => onInput(false)}
                        onFocus={() => onInput(true)}
                        onChangeText={(txt) => 
                            setState(prevState => ({ 
                                ...prevState,
                                name: txt
                            }))
                        }
                    />
                    <Text style={styles.title}>
                        <Text style={styles.subTitle}>* </Text>
                        Last name
                    </Text>
                    <TextInput
                        value={lastName}
                        placeholder='Last name'
                        style={[styles.inputBox, { borderColor: isCheck && lastName.trim() == '' ? 'red' : '#F6C6EA' }]}
                        onBlur={() => onInput(false)}
                        onFocus={() => onInput(true)}
                        onChangeText={(txt) => 
                            setState(prevState => ({ 
                                ...prevState,
                                lastName: txt
                            }))
                        }
                    />
                    <Text style={styles.title}>
                        <Text style={styles.subTitle}>* </Text>
                        Gender
                    </Text>
                    <DropDownPicker
                        value={gender}
                        open={isGender}
                        items={dataGenser}
                        setValue={setGender}
                        placeholder='Gender'
                        placeholderStyle={{ color: 'silver' }}
                        style={[styles.inputBox,{ marginBottom: 10, borderColor: isCheck && gender == null ? 'red' : '#F6C6EA' }]}
                        setOpen={() => {
                            setState(prevState => ({ 
                                ...prevState,
                                isGender: !isGender
                            }))
                        }}
                    />
                    <Text style={styles.title}>
                        <Text style={styles.subTitle}>* </Text>
                        Date of birth
                    </Text>
                    <TouchableOpacity 
                        style={[styles.inputBox, { justifyContent: 'center' }]}
                        onPress={() => 
                            setState(prevState => ({ 
                                ...prevState,
                                isDOB: true
                            }))
                        }
                    >
                        <Text>{moment(dob).format('DD MMM YYYY')}</Text>
                        <DatePicker
                            modal
                            open={isDOB}
                            date={dob}
                            mode='date'
                            onConfirm={(date) => {
                                console.log('DATE: ', date)
                                setState(prevState => ({ 
                                    ...prevState,
                                    isDOB: false,
                                    dob: date
                                }))
                            }}
                            onCancel={() =>
                                setState(prevState => ({ 
                                    ...prevState,
                                    isDOB: false
                                }))
                            }
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>
                        <Text style={styles.subTitle}>* </Text>
                        Email
                    </Text>
                    <TextInput
                        value={email}
                        placeholder='Email'
                        keyboardType='email-address'
                        style={[styles.inputBox, { borderColor: isCheck && email.trim() == '' ? 'red' : '#F6C6EA' }]}
                        onBlur={() => onInput(false)}
                        onFocus={() => onInput(true)}
                        onChangeText={(txt) => 
                            setState(prevState => ({ 
                                ...prevState,
                                email: txt
                            }))
                        }
                    />
                    <Text style={styles.title}>Phone</Text>
                    <TextInput
                        value={phone}
                        placeholder='Phone number'
                        keyboardType='name-phone-pad'
                        style={styles.inputBox}
                        onBlur={() => onInput(false)}
                        onFocus={() => onInput(true)}
                        onChangeText={(txt) => 
                            setState(prevState => ({ 
                                ...prevState,
                                phone: txt
                            }))
                        }
                    />
                    <Text style={styles.title}>Address</Text>
                    <TextInput
                        value={address}
                        multiline={true}
                        placeholder='Address'
                        style={styles.inputArea}
                        onBlur={() => onInput(false)}
                        onFocus={() => onInput(true)}
                        onChangeText={(txt) => 
                            setState(prevState => ({ 
                                ...prevState,
                                address: txt
                            }))
                        }
                    />
                    <View style={theme.btnContainer}>
                        <TouchableOpacity 
                            style={theme.btn}
                            onPress={() => {
                                setState(prevState => ({ ...prevState, isCheck: true }))
                                setTimeout(() => {
                                    onSave()
                                }, 2000)
                            }}
                        >
                            <Text style={theme.btnTxt}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={theme.disBtn}
                            onPress={() => clearState()}
                        >
                            <Text style={theme.btnTxt}>Clear</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            {!isInput && (
                <Footerbar
                    page='FORM'
                    nav={props.navigation}
                />
            )}
        </View>
    )
}

export default FormPage