import { createSlice } from '@reduxjs/toolkit'

let AlbumSlice = createSlice({
    name : "album",
    initialState : [],
    reducers : {
        add(state, action){
            state.push(action.payload);
        },
        insert(state, action){
            return action.payload;
        }
    }
});

export default AlbumSlice.reducer;

export let { add, insert } = AlbumSlice.actions;