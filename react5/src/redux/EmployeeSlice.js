import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

let AddEmp = createAsyncThunk("addteacher", async (data)=>{
    let result = await axios.post("http://localhost:3001/employee", data);
    return result.data;
});

let GetAll = createAsyncThunk("getall", async ()=>{
    let result = await axios.get("http://localhost:3001/employee");
    return result.data;
})


let EmployeeSlice = createSlice({
    name : "employee",
    initialState : [],
    // reducers : {
    //     add(state, action){
    //         state.push(action.payload);
    //     }
    // }
    extraReducers : {
        [AddEmp.fulfilled] : (state, action)=>{
            state.push(action.payload);
        },
        [GetAll.fulfilled] : (state, action)=>{
            return action.payload;
        }
    }
})

export default EmployeeSlice.reducer;

export {AddEmp, GetAll};