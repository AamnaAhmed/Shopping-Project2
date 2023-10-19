// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


// export const fetchproducts = createAsyncThunk("productsFromJson/fetchproducts", async () => {
//    const res = await fetch("http://localhost:9000/dashboardMenu")
//    const data = await res.json()
//    return data;
// })


// const productsFromJson = createSlice({
//     initialState:[],
//     name:"productsFromJson",
//     reducers: {

//     },
//     extraReducers: (builder) => {
//         builder.addCase(fetchproducts.fulfilled, (state,action) => {
//             return action.payload
//         })
//     }
// })


// export const {} =  productsFromJson.actions;
// export default productsFromJson.reducer;