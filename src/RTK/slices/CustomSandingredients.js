import { createSlice } from '@reduxjs/toolkit'

export const snadingredients = createSlice({
    initialState: [],
    name: "snadingredients",
    reducers: {
        getingredients: (state, action) => {
            state.push(action.payload)
        },
        remaoveingredients: (state, action) => {
          return state.filter((ele) => ele.name !== action.payload.name)
        },
        clearstate: () => {
          return []
        },
        quantityPlus: (state, action)  => {
          const findproduct = state.find((product) => product.name == action.payload.name)
          if(findproduct){
            findproduct.quantityNumber += 1
            // console.log(action.payload.number);
          }
          // state.map((ele) => {
          //    if (ele.name == action.payload.name) (
          //     ele.quantityNumber += action.payload.number
          //    )
          // })
        },
        quantityMinus: (state, action)  => {
          const findproduct = state.find((product) => product.name == action.payload.name)
          if(findproduct){
            findproduct.quantityNumber -= 1
            // console.log(action.payload.number);
          }
          // state.map((ele) => {
          //    if (ele.name == action.payload.name) (
          //     ele.quantityNumber += action.payload.number
          //    )
          // })
        }
    }
})


export const {getingredients,remaoveingredients,clearstate,quantityPlus,quantityMinus} = snadingredients.actions;
export default snadingredients.reducer;