import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {menuSlice} from "./MenuSlice";

const RootState = combineReducers({
    menu: menuSlice.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: RootState
    });
}

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']
export type RootReducer = ReturnType<typeof RootState>
