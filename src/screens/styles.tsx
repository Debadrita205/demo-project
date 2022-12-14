import {Platform, StyleSheet} from 'react-native';
import {Colors} from '../styles';
import Dimension from '../utils/Dimension';

export const LoginStyles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.WhiteColor,
    },
    loginContainer: {
        paddingHorizontal: 15,
        paddingTop: 15,
    },
    headerTextContainer: {
        paddingTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: '#000',
        fontWeight: '500',
        fontSize: 30,
    },
    headerSubtitle: {
        color: '#0d438f',
        fontWeight: '400',
        fontSize: 16,
        marginBottom: 10,
    },
    textInputStyle: {
        color: '#000',
        width: '95%',
        paddingHorizontal: 10,
        fontSize: 18,
        height: 60,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    animatedInputContainer: {
        width: '98%',
        paddingTop: 20,
    },
    resetPasswordText: {
        color: '#000',
        fontWeight: '400',
        fontSize: 16,
        marginTop: 20,
    },
    buttonContainer: {
        width: '90%',
        height: 60,
        marginTop: 20,
        marginBottom: Platform.OS === 'android' ? 10 : 30,
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export const FavoriteStyles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: Dimension(10),
    },
});
