import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//creo la interfaz
interface AuthState {
    user: string;
    token: string;
    isAuthenticated: boolean;
}

// estado inicial
const initialState: AuthState = {
    user: '',
    token: '',
    isAuthenticated: false
}

// creo el slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<AuthState>) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = action.payload.isAuthenticated;
        },
        deauthenticate: (state) => {
            state.user = '';
            state.token = '';
            state.isAuthenticated = false;
        },
    },
});

export const { setUser, deauthenticate } = authSlice.actions;
export default authSlice.reducer;
