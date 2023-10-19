import { createSlice } from '@reduxjs/toolkit'


export const GetProduct =  createSlice ({
    initialState: [],
    name: "GetProduct",
    reducers: {
      addToCart: (state, action) => {
        const findproduct = state.find((product) => product.id == action.payload.id)
          if (findproduct) {
            findproduct.quantity +=1
          }else {
            const productClone = {...action.payload,quantity: 1}
            state.push(productClone)
          }
          console.log(findproduct)
      },
      removeFromCart: (state, action) => {
        return state.filter((ele) => ele.id !== action.payload.id)
      },
      clearCart: (state, action) => {
          return []
      },
    }
})


export const {addToCart,removeFromCart,clearCart} = GetProduct.actions;
export default GetProduct.reducer;