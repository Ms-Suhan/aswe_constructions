import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        status: false,
        userData: null
    },
    reducers: {
        login: (state, action) => {
                state.status = true
                state.userData = action.payload
        },
        logout: (state, action) => {
            state.status = false
            state.userData = null
        }

    }
})

export const {login, logout} = loginSlice.actions

export default loginSlice.reducer