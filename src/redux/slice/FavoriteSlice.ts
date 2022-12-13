import {createSlice} from '@reduxjs/toolkit';
import {FavoriteState} from './types';

const initialState: FavoriteState = {
    favoriteUserDetails: [],
};

export const FavoriteSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        resetFavorite: state => {
            state.favoriteUserDetails = [];
        },
        setFavorite: (state, action) => {
            let existingIndex = state.favoriteUserDetails.findIndex(
                user => user.email === action.payload.email,
            );
            if (existingIndex === -1) {
                state.favoriteUserDetails = [
                    ...state.favoriteUserDetails,
                    action.payload,
                ];
            } else {
                state.favoriteUserDetails = state.favoriteUserDetails.filter(
                    user => user.email !== action.payload.email,
                );
            }
        },
    },
});

export const {resetFavorite, setFavorite} = FavoriteSlice.actions;

export default FavoriteSlice.reducer;
