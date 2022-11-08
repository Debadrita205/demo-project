import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {apiStatus, LoginProps, LoginState} from './types';
import {showMessage} from 'react-native-flash-message';

const initialState: LoginState = {
    status: apiStatus.idle,
    userDetails: {},
};

export const login = createAsyncThunk(
    'login/login',
    async (options: LoginProps) => {
        const headers = {
            'Content-Type': 'application/json',
        };
        try {
            const response = await axios.post(
                'https://dummyjson.com/auth/login',
                options,
                {headers},
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    },
);

export const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        resetLogin: state => {
            state.status = apiStatus.idle;
            state.userDetails = {};
        },
    },
    extraReducers: builder => {
        builder
            .addCase(login.pending, state => {
                state.status = apiStatus.loading;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = apiStatus.success;
                state.userDetails = action.payload;
                showMessage({
                    message: 'You have logged in successfully!',
                    type: 'success',
                });
            })
            .addCase(login.rejected, (state, action) => {
                state.status = apiStatus.failed;
                showMessage({
                    message:
                        'Either the username or password that you entered were incorrect.',
                    type: 'danger',
                });
                __DEV__ && console.log('error login: ', action.error);
            });
    },
});

export const {resetLogin} = LoginSlice.actions;

export default LoginSlice.reducer;
