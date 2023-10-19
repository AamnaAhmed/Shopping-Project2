import { createSlice } from '@reduxjs/toolkit'

const quantity = createSlice({
    initialState: [],
    name: "quantity",
    reducers:{
        getquantity: (state,action) => {
           state.push(action.payload)  
        }
    }
})


export const {getquantity} =  quantity.actions;
export default quantity.reducer;