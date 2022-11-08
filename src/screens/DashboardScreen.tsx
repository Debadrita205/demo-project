import {View, Text} from 'react-native';
import React from 'react';
import {DashboardStyles, LoginStyles} from './styles';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {ButtonComponent} from '../components';
import * as Routes from '../utils/Routes';
import {DashboardProps} from './types';
import {resetLogin} from '../redux/slice/LoginSlice';

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
                    <ButtonComponent
                        backgroundColor={'#0d438f'}
                        textColor={'#fff'}
                        title={'Logout'}
                        onPressed={() => {
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
