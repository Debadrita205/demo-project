import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {apiStatus, DashboardState} from './types';
// import {showMessage} from 'react-native-flash-message';

const initialState: DashboardState = {
    status: apiStatus.idle,
    page: 10,
    userDetails: [],
};

export const fetchUserDetails = createAsyncThunk(
    'dashboard/fetchUserDetails',
    async (options: number) => {
        // const headers = {
        //     'Content-Type': 'application/json',
        // };
        try {
            const response = await axios.get(
                `https://randomuser.me/api/?results=${options}`,
                // {headers},
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    },
);

export const DashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        resetDashboard: state => {
            state.status = apiStatus.idle;
            state.userDetails = [];
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchUserDetails.pending, state => {
                state.status = apiStatus.loading;
                state.page = 10;
                state.userDetails = [];
            })
            .addCase(fetchUserDetails.fulfilled, (state, action) => {
                state.status = apiStatus.success;
                // if (state.page === 1) {
                state.userDetails = [...action.payload.results];
                // } else {
                //     state.userDetails = [
                //         ...state.userDetails,
                //         ...action.payload.results,
                //     ];
                // }
                // showMessage({
                //     message: 'You have logged in successfully!',
                //     type: 'success',
                // });
            })
            .addCase(fetchUserDetails.rejected, (state, action) => {
                state.status = apiStatus.failed;
                // showMessage({
                //     message:
                //         'Either the username or password that you entered were incorrect.',
                //     type: 'danger',
                // });
                __DEV__ && console.log('error dashboard: ', action.error);
            });
    },
});

export const {resetDashboard} = DashboardSlice.actions;

export default DashboardSlice.reducer;
