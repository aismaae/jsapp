import { Linking } from 'react-native'
import { InAppBrowser } from 'react-native-inappbrowser-reborn'

export async function openLink(e) {
    try {
        const url = e
        if (await InAppBrowser.isAvailable()) {
            const result = await InAppBrowser.open(url, {
                // iOS Properties
                dismissButtonStyle: 'Cancel',
                preferredBarTintColor: '#FFF',
                preferredControlTintColor: 'black',
                readerMode: false,
                animated: true,
                modalPresentationStyle: 'overFullScreen',
                // modalTransitionStyle: 'partialCurl',
                modalEnabled: true,
                enableBarCollapsing: false,
                // Android Properties
                showTitle: true,
                toolbarColor: '#FFF',
                secondaryToolbarColor: 'black',
                enableUrlBarHiding: true,
                enableDefaultShare: true,
                forceCloseOnRedirection: false,
                animations: {
                    startEnter: 'slide_in_right',
                    startExit: 'slide_out_left',
                    endEnter: 'slide_in_left',
                    endExit: 'slide_out_right'
                },
                headers: {
                    'my-custom-header': 'my custom header value'
                }
            })
            console.log(JSON.stringify(result))
        }
        else Linking.openURL(url)
    } catch (error) {
        console.log(error.message)
    }
}