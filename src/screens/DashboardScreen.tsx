/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import {DashboardStyles, LoginStyles} from './styles';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import * as Routes from '../utils/Routes';
import {DashboardProps} from './types';
import {resetLogin} from '../redux/slice/LoginSlice';
import {Button} from '@react-native-material/core';

const DashboardScreen = ({navigation}: DashboardProps) => {
    const dispatch = useAppDispatch();
    const userDetails = useAppSelector(state => state.userLogin.userDetails);

    return (
        <View style={LoginStyles.screen}>
            <View style={DashboardStyles.page}>
                <Text style={{fontSize: 20, color: '#000', fontWeight: 'bold'}}>
                    Welcome, {userDetails.firstName}
                </Text>
                <View style={LoginStyles.buttonContainer}>
                    <Button
                        style={{
                            backgroundColor: '#0d438f',
                        }}
                        titleStyle={{
                            color: '#fff',
                        }}
                        title={'Logout'}
                        onPress={() => {
                            dispatch(resetLogin());
                            navigation.navigate(Routes.LoginScreen);
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default DashboardScreen;
