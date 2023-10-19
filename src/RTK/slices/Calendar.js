import { createSlice } from '@reduxjs/toolkit'


export const calendar = createSlice({
    initialState:[],
    name: "TotlePrice",
    reducers: {
        AddDate: (state, action) => {
            if (state.length != 0) {
                const foundTime = state.find((ele, ind) => ele.SandDete == action.payload.SandDete);
                if (!foundTime) {
                    state.push(action.payload)
                } else {
                    state.map((ele) => {
                        if (ele.SandDete == action.payload.SandDete) {
                            ele.SandOrders.push(action.payload.SandOrders[0])
                        }
                    })
                }
            } else {
                state.push(action.payload)
            }
        }
    }
})


export const { AddDate } = calendar.actions;
export default calendar.reducer;