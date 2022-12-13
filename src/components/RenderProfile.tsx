import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../styles';
import Dimension from '../utils/Dimension';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useAppSelector} from '../redux/hooks';
import {RenderProfileProps} from './types';

const RenderProfile: React.FC<RenderProfileProps> = props => {
    const favoriteList = useAppSelector(
        state => state.favorites.favoriteUserDetails,
    );

    return (
        <View key={props.index} style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={{uri: props.item.picture?.medium}}
                    style={styles.image}
                />
            </View>
            <View style={{width: '70%'}}>
                <Text style={styles.mainText}>
                    {props.item.name?.title}. {props.item.name?.first}{' '}
                    {props.item.name?.last}
                </Text>
                <Text style={styles.subText}>
                    Email: {props.item.email as string}
                </Text>
                <Text style={styles.subText}>
                    Phone: {props.item.phone as string}
                </Text>
            </View>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => props.onPress(props.item)}
            >
                <Icon
                    name="favorite"
                    color={
                        favoriteList.find(
                            person => person.email === props.item.email,
                        )
                            ? 'red'
                            : '#ccc'
                    }
                    size={Dimension(25)}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WhiteColor,
        width: '95%',
        alignSelf: 'center',
        borderRadius: Dimension(10),
        margin: Dimension(10),
        padding: Dimension(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageContainer: {
        width: Dimension(40),
        height: Dimension(40),
        borderRadius: Dimension(20),
        overflow: 'hidden',
    },
    image: {
        width: Dimension(40),
        height: Dimension(40),
    },
    mainText: {
        color: Colors.BlackColor,
        fontSize: Dimension(16),
    },
    subText: {
        color: Colors.BlackColor,
        fontSize: Dimension(11),
    },
});

export default RenderProfile;
