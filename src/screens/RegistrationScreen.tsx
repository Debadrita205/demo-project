/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
    KeyboardAvoidingView,
    ScrollView,
    Text,
    TextInput,
    View,
} from 'react-native';
// Packages
import {showMessage} from 'react-native-flash-message';

// Style
import {LoginStyles} from './styles';

// components
import {ButtonComponent, Loader} from '../components';
import * as Routes from '../utils/Routes';

import {useAppSelector} from '../redux/hooks';
import {apiStatus} from '../redux/slice/types';
import {LoginProps} from './types';

const RegistrationScreen = ({navigation}: LoginProps) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');

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
            showMessage({
                message: 'Please Enter Your first Name',
                type: 'danger',
            });
        } else if (last === '') {
            showMessage({
                message: 'Please Enter Your last Name',
                type: 'danger',
            });
        } else if (email === '') {
            showMessage({
                message: 'Please Enter Your Email Id',
                type: 'danger',
            });
        } else if (!email.match(mailFormat)) {
            showMessage({
                message: 'Please Enter a Valid Email Id',
                type: 'danger',
            });
        } else if (password === '') {
            showMessage({
                message: 'Please Enter Your Password',
                type: 'danger',
            });
        } else {
            showMessage({
                message: 'You have been registered succesfully.',
                type: 'success',
            });
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
                            <Text style={LoginStyles.headerText}>
                                CS Tutor Login
                            </Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <View style={LoginStyles.animatedInputContainer}>
                                <Text style={LoginStyles.headerSubtitle}>
                                    First Name
                                </Text>
                                <TextInput
                                    value={first}
                                    onChangeText={text => setFirst(text)}
                                    style={LoginStyles.textInputStyle}
                                />
                            </View>
                            <View style={LoginStyles.animatedInputContainer}>
                                <Text style={LoginStyles.headerSubtitle}>
                                    Last Name
                                </Text>
                                <TextInput
                                    value={last}
                                    onChangeText={text => setLast(text)}
                                    style={LoginStyles.textInputStyle}
                                />
                            </View>
                            <View style={LoginStyles.animatedInputContainer}>
                                <Text style={LoginStyles.headerSubtitle}>
                                    Email
                                </Text>
                                <TextInput
                                    value={email}
                                    onChangeText={text => setEmail(text)}
                                    style={LoginStyles.textInputStyle}
                                />
                            </View>
                            <View style={LoginStyles.animatedInputContainer}>
                                <Text style={LoginStyles.headerSubtitle}>
                                    Password
                                </Text>
                                <TextInput
                                    value={password}
                                    onChangeText={text => setPassword(text)}
                                    style={LoginStyles.textInputStyle}
                                    secureTextEntry={true}
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
                                <ButtonComponent
                                    backgroundColor={'#0d438f'}
                                    textColor={'#fff'}
                                    title={'Login'}
                                    onPressed={() => {
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
                                <ButtonComponent
                                    backgroundColor={'#0d438f'}
                                    textColor={'#fff'}
                                    title={'Submit'}
                                    onPressed={onLoginClick}
                                />
                            </View>
                        </View>
                    </View>
                    {status === apiStatus.loading && (
                        <Loader color={'#0d438f'} />
                    )}
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
};

export default RegistrationScreen;
