/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Keyboard, View} from 'react-native';
// Packages

// Style
import {LoginStyles} from './styles';

// components
import {Loader} from '../components';
import * as Routes from '../utils/Routes';

import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {login} from '../redux/slice/LoginSlice';
import {apiStatus} from '../redux/slice/types';
import {LoginProps} from './types';
import {Button, TextInput, Text, Snackbar} from '@react-native-material/core';

const LoginScreen = ({navigation}: LoginProps) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState('');

    const status = useAppSelector(state => state.userLogin.status);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (status === apiStatus.success) {
            navigation.replace(Routes.DashboardScreen);
            setError('You have logged in successfully!');
        } else if (status === apiStatus.failed) {
            setError(
                'Either the username or password that you entered were incorrect.',
            );
        }
    }, [status, navigation]);

    const onLoginClick = async () => {
        if (email === '') {
            setError('Please Enter Your Email');
            // showMessage({
            //     message: 'Please Enter Your Email',
            //     type: 'danger',
            // });
        } else if (password === '') {
            setError('Please Enter Your Password');
            // showMessage({
            //     message: 'Please Enter Your Password',
            //     type: 'danger',
            // });
        } else {
            Keyboard.dismiss();
            dispatch(
                login({
                    username: email,
                    password: password,
                }),
            );
        }
    };

    return (
        <View style={LoginStyles.screen}>
            <View style={LoginStyles.loginContainer}>
                <View style={LoginStyles.headerTextContainer}>
                    <Text variant={'h4'}>CS Tutor Login</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <View style={LoginStyles.animatedInputContainer}>
                        <Text style={LoginStyles.headerSubtitle}>Username</Text>
                        <TextInput
                            // label={'Username'}
                            value={email}
                            onChangeText={text => setEmail(text)}
                            variant={'standard'}
                            inputContainerStyle={{
                                backgroundColor: '#fff',
                                height: 50,
                                borderRadius: 5,
                                paddingLeft: 10,
                            }}
                        />
                    </View>
                    <View style={LoginStyles.animatedInputContainer}>
                        <Text style={LoginStyles.headerSubtitle}>Password</Text>
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
                <Text variant={'h6'} style={LoginStyles.resetPasswordText}>
                    Forgot Password
                </Text>
                <View style={LoginStyles.buttonWrapper}>
                    <View style={[LoginStyles.buttonContainer, {width: '45%'}]}>
                        <Button
                            style={{
                                backgroundColor: '#0d438f',
                            }}
                            disabled={
                                status === apiStatus.loading ? true : false
                            }
                            title={'Register'}
                            titleStyle={{
                                color: '#fff',
                            }}
                            onPress={() => {
                                navigation.navigate(Routes.RegistrationScreen);
                            }}
                        />
                    </View>
                    <View style={[LoginStyles.buttonContainer, {width: '45%'}]}>
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
                            title={'Login Now'}
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
    );
};

export default LoginScreen;
