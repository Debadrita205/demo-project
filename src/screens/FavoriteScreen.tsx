/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {SafeAreaView} from 'react-native-safe-area-context';
import {setFavorite} from '../redux/slice/FavoriteSlice';
import {RenderProfile} from '../components';
import {FavoriteStyles} from './styles';

const FavoriteScreen = () => {
    const dispatch = useAppDispatch();
    const userDetails = useAppSelector(
        state => state.favorites.favoriteUserDetails,
    );

    const onSelectFavorite = (user: {
        [key: string]: string | {[key: string]: string};
    }) => {
        dispatch(setFavorite(user));
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            {userDetails.length > 0 ? (
                <FlatList
                    data={userDetails}
                    renderItem={({item, index}) => (
                        <RenderProfile
                            index={index}
                            item={item}
                            onPress={user => onSelectFavorite(user)}
                        />
                    )}
                    keyExtractor={item => item.login.uuid}
                />
            ) : (
                <View style={FavoriteStyles.page}>
                    <Text style={{textAlign: 'center'}}>
                        No user found, start by clicking favorite icon in home
                        page.
                    </Text>
                </View>
            )}
        </SafeAreaView>
    );
};

export default FavoriteScreen;
