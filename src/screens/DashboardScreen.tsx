/* eslint-disable react-native/no-inline-styles */
import {RefreshControl} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {fetchUserDetails, resetDashboard} from '../redux/slice/DashboardSlice';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../styles';

import {setFavorite} from '../redux/slice/FavoriteSlice';
import {apiStatus} from '../redux/slice/types';
import {Loader, RenderProfile} from '../components';

const DashboardScreen = () => {
    const refreshing = useState(false)[0];
    const [page, setPage] = useState(10);
    const [onEndReached, setOnEndReached] = useState(false);

    const dispatch = useAppDispatch();
    const userDetails = useAppSelector(state => state.userDetails.userDetails);
    const status = useAppSelector(state => state.userDetails.status);

    useEffect(() => {
        dispatch(fetchUserDetails(page));
    }, [dispatch, page]);

    const onRefresh = () => {
        dispatch(resetDashboard());
        dispatch(fetchUserDetails(page));
    };

    const loadMore = () => {
        console.log('load more data');
        if (userDetails.length !== 0 && !onEndReached) {
            dispatch(fetchUserDetails(page + 10));
            setPage(pre => pre + 10);
            setOnEndReached(true);
        }
    };

    const onSelectFavorite = (user: {
        [key: string]: string | {[key: string]: string};
    }) => {
        dispatch(setFavorite(user));
    };

    return (
        <SafeAreaView edges={['top']} style={{flex: 1}}>
            <FlatList
                data={userDetails}
                renderItem={({item, index}) => (
                    <RenderProfile
                        index={index}
                        item={item}
                        onPress={user => onSelectFavorite(user)}
                    />
                )}
                refreshControl={
                    <RefreshControl
                        title="Pull to refresh"
                        tintColor={Colors.BlackColor}
                        titleColor={Colors.BlackColor}
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                onEndReachedThreshold={0.01}
                onEndReached={loadMore}
                onMomentumScrollBegin={() => setOnEndReached(false)}
                maxToRenderPerBatch={10}
                removeClippedSubviews={true}
                initialNumToRender={10}
                windowSize={30}
                keyExtractor={item => item.login.uuid}
            />
            {status === apiStatus.loading && (
                <Loader color={Colors.AppBackgroundColor} />
            )}
        </SafeAreaView>
    );
};

export default DashboardScreen;
