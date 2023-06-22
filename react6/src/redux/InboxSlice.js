import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

let SendMail = createAsyncThunk("sendmail", async (data)=>{
   let response = await axios.post("http://localhost:3001/inbox", data)
    return response.data;
});

let GetMail = createAsyncThunk("getmail", async ()=>{
    let response = await axios.get("http://localhost:3001/inbox");
    return response.data;
})

let InboxSlice = createSlice({
    name : "inbox",
    initialState : [],
    reducers : {
        readMailStatus(state, action){
            //console.log(action.payload)
            state.map((x)=>{
                if(x.id == action.payload){

                    x.readStatus = 1;
                }
                return x;
            });
        }
    },
    extraReducers : {
        [SendMail.fulfilled] : (state, action)=>{
            state.push(action.payload);
        },
        [GetMail.fulfilled] : (state, action)=>{
            return action.payload;
           
        }
    }
})

export default InboxSlice.reducer;

export { SendMail, GetMail };
export let { readMailStatus } = InboxSlice.actions;