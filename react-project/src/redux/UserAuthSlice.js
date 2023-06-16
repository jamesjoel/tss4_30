import { createSlice } from '@reduxjs/toolkit'

const UserAuthSlice = createSlice({
    name : 'userauth',
    initialState : {},
    reducers : {
        add(state, action){
            return {check : true};
        },
        remove(state, action){
            return {};
        }   
    }
})

export default UserAuthSlice.reducer;

export let { add, remove } = UserAuthSlice.actions;