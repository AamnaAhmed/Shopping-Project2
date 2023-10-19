import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {dashboardMenu} from "../../menu/dashboardMenu"
import { useSelector } from "react-redux"



export const dashboardSand = createSlice({
    initialState: dashboardMenu,
    name: "dashboardSand",
    reducers: {
      addOrder: (state,action)=>{
        action.payload.sandwiches.map(sand=>{
            state.map(stateSand=>{
                if(stateSand.id == sand.id){
                    stateSand.amount+=sand.quantity
                    stateSand.orders.push(action.payload)
                    stateSand.quantity.push(sand.quantity)
                    stateSand.totlePrice.push(sand.price)
                  //   const totleprice = products.reduce((acc, product) => {
                  //     return acc += product.price * product.quantity
                  // }, 0)
                    // if (stateSand.years.length != 0) {
                    //   const foundTime = stateSand.years.find((ele) => ele == action.payload.date)
                    //   if (!foundTime) {
                    //     stateSand.years.push(action.payload.date)
                    //   }
                    // }else {
                    //   stateSand.years.push(action.payload.date)
                    // }

                }
            })
         
        })
      },


    }
})


export const {addOrder} = dashboardSand.actions;
export default dashboardSand.reducer;
