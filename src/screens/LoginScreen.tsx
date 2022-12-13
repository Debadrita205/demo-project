/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Keyboard, View} from 'react-native';
// Packages

// Style
import {LoginStyles} from './styles';

// components
import {Loader} from '../components';
import * as Routes from '../utils/Routes';

import {useAppSelector} from '../redux/hooks';
import {apiStatus} from '../redux/slice/types';
import {LoginProps} from './types';
import {Button, TextInput, Text, Snackbar} from '@react-native-material/core';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../styles';

const LoginScreen = ({navigation}: LoginProps) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState('');

    const status = useAppSelector(state => state.userLogin.status);

    const onLoginClick = async () => {
        if (email === '') {
            setError('Please Enter Your Email');
        } else if (password === '') {
            setError('Please Enter Your Password');
        } else if (
            email !== 'reactnative@jetdevs.com' ||
            password !== 'jetdevs@123'
        ) {
            setError('Your credentials do not match');
        } else {
            Keyboard.dismiss();
            setError('You have logged in successfully!');
            setTimeout(() => {
                navigation.replace(Routes.Tab);
            }, 1000);
        }
    };

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: Colors.WhiteColor}}>
            <View style={LoginStyles.screen}>
                <View style={LoginStyles.loginContainer}>
                    <View style={LoginStyles.headerTextContainer}>
                        <Text variant={'h4'}>User Login</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <View style={LoginStyles.animatedInputContainer}>
                            <Text style={LoginStyles.headerSubtitle}>
                                Enter Email
                            </Text>
                            <TextInput
                                value={email}
                                onChangeText={text => setEmail(text)}
                                variant={'standard'}
                                inputContainerStyle={{
                                    backgroundColor: '#fff',
                                    height: 50,
                                    borderRadius: 5,
                                    paddingLeft: 10,
                                }}
                                keyboardType={'email-address'}
                                autoCapitalize={'none'}
                            />
                        </View>
                        <View style={LoginStyles.animatedInputContainer}>
                            <Text style={LoginStyles.headerSubtitle}>
                                Enter Password
                            </Text>
                            <TextInput
                                value={password}
                                onChangeText={text => setPassword(text)}
                                secureTextEntry={true}
                                variant={'standard'}
                                inputContainerStyle={{
                                    backgroundColor: '#fff',
                                    height: 50,
                                    borderRadius: 5,
                                    paddingLeft: 10,
                                }}
                            />
                        </View>
                    </View>
                    <View style={LoginStyles.buttonWrapper}>
                        <View
                            style={[
                                LoginStyles.buttonContainer,
                                {width: '45%'},
                            ]}
                        >
                            <Button
                                style={{
                                    backgroundColor: '#0d438f',
                                }}
                                titleStyle={{
                                    color: '#fff',
                                }}
                                disabled={
                                    status === apiStatus.loading ? true : false
                                }
                                title={'Login'}
                                onPress={onLoginClick}
                            />
                        </View>
                    </View>
                </View>
                {status === apiStatus.loading && <Loader color={'#0d438f'} />}
                {error !== '' && (
                    <Snackbar
                        message={error}
                        style={{
                            position: 'absolute',
                            start: 16,
                            end: 16,
                            bottom: 16,
                        }}
                        action={
                            <Button
                                variant="text"
                                title="Dismiss"
                                color="#0d438f"
                                compact
                                onPress={() => setError('')}
                            />
                        }
                    />
                )}
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;
