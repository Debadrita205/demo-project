import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Routes from '../utils/Routes';
import Screens from '../screens';
import {Colors} from '../styles';
import Dimension from '../utils/Dimension';
import Icon from 'react-native-vector-icons/MaterialIcons';

export type TabParamList = {
    [Routes.DashboardScreen]: undefined;
    [Routes.FavoriteScreen]: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName={Routes.DashboardScreen}
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBarStyle,
            }}
        >
            <Tab.Screen
                options={{
                    title: 'Home',
                    tabBarIcon: props => (
                        <Icon
                            name="home"
                            color={
                                props.focused
                                    ? Colors.AppBackgroundColor
                                    : Colors.BlackColor
                            }
                            size={Dimension(25)}
                        />
                    ),
                    tabBarActiveTintColor: Colors.AppBackgroundColor,
                    tabBarLabelStyle: styles.tabBarTextStyle,
                    tabBarInactiveTintColor: Colors.BlackColor,
                    unmountOnBlur: true,
                    tabBarStyle: styles.tabBarStyle,
                }}
                name={Routes.DashboardScreen}
                component={Screens.DashboardScreen}
            />

            <Tab.Screen
                options={{
                    title: 'Favourites',
                    tabBarIcon: props => (
                        <Icon
                            name="favorite"
                            color={
                                props.focused
                                    ? Colors.AppBackgroundColor
                                    : Colors.BlackColor
                            }
                            size={Dimension(25)}
                        />
                    ),
                    tabBarActiveTintColor: Colors.AppBackgroundColor,
                    tabBarLabelStyle: styles.tabBarTextStyle,
                    tabBarInactiveTintColor: Colors.BlackColor,
                    unmountOnBlur: true,
                    tabBarStyle: styles.tabBarStyle,
                }}
                name={Routes.FavoriteScreen}
                component={Screens.FavoriteScreen}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBarTextStyle: {
        fontWeight: '500',
        fontSize: Dimension(12),
    },
    tabBarStyle: {
        height: Platform.OS === 'android' ? Dimension(55) : Dimension(85),
        borderTopLeftRadius: Dimension(20),
        borderTopRightRadius: Dimension(20),
    },
});

export default TabNavigation;
