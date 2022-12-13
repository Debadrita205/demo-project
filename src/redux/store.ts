import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import DashboardSlice from './slice/DashboardSlice';
import FavoriteSlice from './slice/FavoriteSlice';
import LoginSlice from './slice/LoginSlice';

const store = configureStore({
    reducer: {
        userLogin: LoginSlice,
        userDetails: DashboardSlice,
        favorites: FavoriteSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export default store;
