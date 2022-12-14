import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screens from '../screens';
import * as Routes from '../utils/Routes';
import TabNavigation from './bottomTabNavigation';

export type RootStackParamList = {
    [Routes.LoginScreen]: undefined;
    [Routes.RegistrationScreen]: undefined;
    [Routes.Tab]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation: React.FC = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName={Routes.LoginScreen}>
                <RootStack.Screen
                    name={Routes.LoginScreen}
                    component={Screens.LoginScreen}
                    options={{headerShown: false}}
                />
                <RootStack.Screen
                    name={Routes.RegistrationScreen}
                    component={Screens.RegistrationScreen}
                    options={{headerShown: false}}
                />
                <RootStack.Screen
                    name={Routes.Tab}
                    component={TabNavigation}
                    options={{headerShown: false}}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;
