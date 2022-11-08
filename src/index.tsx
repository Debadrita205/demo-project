import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import Navigations from './navigations';
import store from './redux/store';
import FlashMessage from 'react-native-flash-message';

export default function () {
    return (
        <>
            <StatusBar
                animated={true}
                backgroundColor={'#FFF'}
                barStyle={'dark-content'}
                showHideTransition={'none'}
                hidden={false}
            />
            <Provider store={store}>
                <Navigations />
            </Provider>
            <FlashMessage
                position="top"
                hideOnPress={true}
                autoHide={true}
                duration={5000}
            />
        </>
    );
}
