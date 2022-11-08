/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Keyboard, Text, TextInput, View} from 'react-native';
// Packages
import {hideMessage, showMessage} from 'react-native-flash-message';

// Style
import {LoginStyles} from './styles';

// components
import {ButtonComponent, Loader} from '../components';
import * as Routes from '../utils/Routes';

import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {login} from '../redux/slice/LoginSlice';
import {apiStatus} from '../redux/slice/types';
import {LoginProps} from './types';

const LoginScreen = ({navigation}: LoginProps) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const status = useAppSelector(state => state.userLogin.status);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (status === apiStatus.success) {
            navigation.replace(Routes.DashboardScreen);
        }
    }, [status, navigation]);

    const onLoginClick = async () => {
        if (email === '') {
            showMessage({
                message: 'Please Enter Your Email Id',
                type: 'danger',
            });
        } else if (password === '') {
            showMessage({
                message: 'Please Enter Your Password',
                type: 'danger',
            });
        } else {
            hideMessage();
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
                    <Text style={LoginStyles.headerText}>CS Tutor Login</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <View style={LoginStyles.animatedInputContainer}>
                        <Text style={LoginStyles.headerSubtitle}>Username</Text>
                        <TextInput
                            value={email}
                            onChangeText={text => setEmail(text)}
                            style={LoginStyles.textInputStyle}
                        />
                    </View>
                    <View style={LoginStyles.animatedInputContainer}>
                        <Text style={LoginStyles.headerSubtitle}>Password</Text>
                        <TextInput
                            value={password}
                            onChangeText={text => setPassword(text)}
                            style={LoginStyles.textInputStyle}
                            secureTextEntry={true}
                        />
                    </View>
                </View>
                <Text style={LoginStyles.resetPasswordText}>
                    Forgot Password
                </Text>
                <View style={LoginStyles.buttonWrapper}>
                    <View style={[LoginStyles.buttonContainer, {width: '45%'}]}>
                        <ButtonComponent
                            backgroundColor={'#0d438f'}
                            textColor={'#fff'}
                            isDisabled={
                                status === apiStatus.loading ? true : false
                            }
                            title={'Register'}
                            onPressed={() => {
                                navigation.navigate(Routes.RegistrationScreen);
                            }}
                        />
                    </View>
                    <View style={[LoginStyles.buttonContainer, {width: '45%'}]}>
                        <ButtonComponent
                            backgroundColor={'#0d438f'}
                            textColor={'#fff'}
                            isDisabled={
                                status === apiStatus.loading ? true : false
                            }
                            title={'Login Now'}
                            onPressed={onLoginClick}
                        />
                    </View>
                </View>
            </View>
            {status === apiStatus.loading && <Loader color={'#0d438f'} />}
        </View>
    );
};

export default LoginScreen;
