import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import LoginSlice from './slice/LoginSlice';

const store = configureStore({
    reducer: {
        userLogin: LoginSlice,
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
