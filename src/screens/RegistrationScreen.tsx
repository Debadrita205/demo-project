/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {KeyboardAvoidingView, ScrollView, View} from 'react-native';
// Packages
import {Button, TextInput, Text, Snackbar} from '@react-native-material/core';

// Style
import {LoginStyles} from './styles';

// components
import {Loader} from '../components';
import * as Routes from '../utils/Routes';

import {useAppSelector} from '../redux/hooks';
import {apiStatus} from '../redux/slice/types';
import {LoginProps} from './types';

const RegistrationScreen = ({navigation}: LoginProps) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [error, setError] = useState('');

    const status = useAppSelector(state => state.userLogin.status);

    useEffect(() => {
        if (status === apiStatus.success) {
            navigation.replace(Routes.DashboardScreen);
        }
    }, [status, navigation]);

    const onLoginClick = () => {
        const mailFormat =
            /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (first === '') {
            setError('Please Enter Your first Name');
            // showMessage({
            //     message: 'Please Enter Your first Name',
            //     type: 'danger',
            // });
        } else if (last === '') {
            setError('Please Enter Your last Name');
            // showMessage({
            //     message: 'Please Enter Your last Name',
            //     type: 'danger',
            // });
        } else if (email === '') {
            setError('Please Enter Your Email');
            // showMessage({
            //     message: 'Please Enter Your Email',
            //     type: 'danger',
            // });
        } else if (!email.match(mailFormat)) {
            setError('Please Enter a Valid Email');
            // showMessage({
            //     message: 'Please Enter a Valid Email',
            //     type: 'danger',
            // });
        } else if (password === '') {
            setError('Please Enter Your Password');
            // showMessage({
            //     message: 'Please Enter Your Password',
            //     type: 'danger',
            // });
        } else {
            setError('You have been registered succesfully.');
            // showMessage({
            //     message: 'You have been registered succesfully.',
            //     type: 'success',
            // });
        }
    };

    return (
        <View style={LoginStyles.screen}>
            <KeyboardAvoidingView
                style={{flex: 1}}
                behavior={'padding'}
                keyboardVerticalOffset={-500}
            >
                <ScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={LoginStyles.loginContainer}>
                        <View style={LoginStyles.headerTextContainer}>
                            <Text variant={'h4'}>CS Tutor Registration</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <View style={LoginStyles.animatedInputContainer}>
                                <Text style={LoginStyles.headerSubtitle}>
                                    First Name
                                </Text>
                                <TextInput
                                    value={first}
                                    onChangeText={text => setFirst(text)}
                                    inputContainerStyle={{
                                        backgroundColor: '#fff',
                                        height: 50,
                                        borderRadius: 5,
                                        paddingLeft: 10,
                                    }}
                                />
                            </View>
                            <View style={LoginStyles.animatedInputContainer}>
                                <Text style={LoginStyles.headerSubtitle}>
                                    Last Name
                                </Text>
                                <TextInput
                                    value={last}
                                    onChangeText={text => setLast(text)}
                                    inputContainerStyle={{
                                        backgroundColor: '#fff',
                                        height: 50,
                                        borderRadius: 5,
                                        paddingLeft: 10,
                                    }}
                                />
                            </View>
                            <View style={LoginStyles.animatedInputContainer}>
                                <Text style={LoginStyles.headerSubtitle}>
                                    Email
                                </Text>
                                <TextInput
                                    value={email}
                                    onChangeText={text => setEmail(text)}
                                    inputContainerStyle={{
                                        backgroundColor: '#fff',
                                        height: 50,
                                        borderRadius: 5,
                                        paddingLeft: 10,
                                    }}
                                />
                            </View>
                            <View style={LoginStyles.animatedInputContainer}>
                                <Text style={LoginStyles.headerSubtitle}>
                                    Password
                                </Text>
                                <TextInput
                                    value={password}
                                    onChangeText={text => setPassword(text)}
                                    secureTextEntry={true}
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
                                    title={'Login'}
                                    onPress={() => {
                                        navigation.goBack();
                                    }}
                                />
                            </View>
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
                                    title={'Submit'}
                                    onPress={onLoginClick}
                                />
                            </View>
                        </View>
                    </View>
                    {status === apiStatus.loading && (
                        <Loader color={'#0d438f'} />
                    )}
                </ScrollView>
            </KeyboardAvoidingView>
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

export default RegistrationScreen;
