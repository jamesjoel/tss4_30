import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

let AddTeacher = createAsyncThunk("addteacher", async (data)=>{
    let result = await axios.post("http://localhost:3001/teacher", data);
    return result.data;
});

let GetAll = createAsyncThunk("getall", async ()=>{
    let result = await axios.get("http://localhost:3001/teacher");
    return result.data;
})


let TeacherSlice = createSlice({
    name : "teacher",
    initialState : [],
    // reducers : {
    //     add(state, action){
    //         state.push(action.payload);
    //     }
    // }
    extraReducers : {
        [AddTeacher.fulfilled] : (state, action)=>{
            state.push(action.payload);
        },
        [GetAll.fulfilled] : (state, action)=>{
            return action.payload;
        }
    }
})

export default TeacherSlice.reducer;

export {AddTeacher, GetAll};