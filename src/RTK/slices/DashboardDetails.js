import { createSlice } from '@reduxjs/toolkit'


export const DashboardDetails =  createSlice ({
    initialState: {
        totlePrice:[],
        totleCustomOrders: []
    },
    name: "TotlePrice",
    reducers: {
        getTotlePrice: (state,action) => {
            state.totlePrice.push(action.payload)
        },
        getCustomNembers: (state,action) => {
            state.totleCustomOrders.push(action.payload)
        }
    }
})


export const {getTotlePrice,getCustomNembers} = DashboardDetails.actions;
export default DashboardDetails.reducer;