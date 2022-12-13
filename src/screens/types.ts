import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations';

export type LoginProps = NativeStackScreenProps<
    RootStackParamList,
    'LoginScreen'
>;

export type RegistrationProps = NativeStackScreenProps<
    RootStackParamList,
    'RegistrationScreen'
>;

export type DashboardProps = NativeStackScreenProps<
    RootStackParamList,
    'DashboardScreen'
>;
