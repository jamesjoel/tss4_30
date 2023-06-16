import { createSlice } from '@reduxjs/toolkit'

const AdminAuthSlice = createSlice({
    name : "adminauth",
    initialState : {},
    reducers : {
        add(state, action){
            return { check : true };
        },
        remove(state, action){
            return {};
        }
    }
})

export default AdminAuthSlice.reducer;

export let { add, remove } = AdminAuthSlice.actions;