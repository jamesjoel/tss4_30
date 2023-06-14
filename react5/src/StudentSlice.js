import { createSlice } from '@reduxjs/toolkit'

let StudentSlice = createSlice({
    name : "student",
    initialState : [],
    reducers : {
        fetch(state, action){
            return action.payload;
        },

        add(state, action){
            state.push(action.payload)
        },
        del(state, action){
            state.pop();
            return state;
        },
        rev(state, action){
            state.reverse();
            return state;
        },
        del2(state, action){
            state.splice(action.payload-1, 1);
            return state;
        }

    }
})

export default StudentSlice.reducer;

export let { add, del, rev, del2, fetch } = StudentSlice.actions;