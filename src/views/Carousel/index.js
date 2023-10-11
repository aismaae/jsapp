import React, { useState, useEffect } from 'react'
import { View, ScrollView, Text, Image, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'

import Headerbar from '../../components/Header'
import Footerbar from '../../components/Footer'
import Loaderbar from '../../components/Loader'
import theme from '../../components/Theme'
import styles from './styles'
import { Get } from '../../utils/axios'

const initialState = {
    data: [],
    isLoading: true
}

const CarouselPage = props => {

    const [
        { data, isLoading },
        setState
    ] = useState(initialState)

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        let params = {
            url: 'https://api.thecatapi.com',
            endpoint: '/v1/images/search?limit=10'
        }
    
        Get(params)
        .then(json => {
            console.log('Json: ', JSON.stringify(json))
            setState(prevState => ({ 
                ...prevState,
                data: json,
                isLoading: false
            }))
        })
        .catch(error => console.log(error))
    }

    const renderItem = ({item, index}) => {
        return (
            <View 
                key={index} 
                style={styles.card}
            >
                <Image
                    style={styles.img}
                    source={{ uri: item.url }}
                />
                <View style={styles.content}>
                    <Text style={styles.title}>ID: {item.id}</Text>
                    <Text style={styles.txt}>Size: {item.width}x{item.height}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={theme.container}>
            <Headerbar
                subPage={true}
                title='CAROUSEL PAGE'
                nav={props.navigation}
            />
            {isLoading ?
                <Loaderbar type='square' />
            :
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    style={theme.scroller}
                >
                    <Carousel
                        data={data}
                        firstItem={1}
                        renderItem={renderItem}
                        sliderWidth={Dimensions.get('screen').width}
                        itemWidth={Dimensions.get('window').width / 2}
                    />
                    <Carousel
                        data={data}
                        layout={'stack'}
                        layoutCardOffset={'18'}
                        renderItem={renderItem}
                        sliderWidth={Dimensions.get('screen').width}
                        itemWidth={Dimensions.get('window').width / 2}
                    />
                    <Carousel
                        data={data}
                        firstItem={4}
                        layout={'tinder'}
                        layoutCardOffset={'9'}
                        renderItem={renderItem}
                        sliderWidth={Dimensions.get('screen').width}
                        itemWidth={Dimensions.get('window').width / 2}
                    />
                </ScrollView>
            }
            <Footerbar
                page='CAROUSEL'
                nav={props.navigation}
            />
        </View>
    )
}

export default CarouselPage