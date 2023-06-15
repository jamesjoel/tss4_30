import { createSlice } from '@reduxjs/toolkit'

let CartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        add(state, action){
            state.push(action.payload)
        },
        removeOne(state, action){
            
            return state.filter(x=>x._id != action.payload._id);
            
        },
        removeAll(state, action){
            return [];
        }
    }
})

export default CartSlice.reducer;

export let { add, removeOne, removeAll } = CartSlice.actions;