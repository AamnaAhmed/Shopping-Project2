import { configureStore } from '@reduxjs/toolkit'
import  GetProduct from "./slices/GetProduct"
import snadingredients from "./slices/CustomSandingredients"
import productsFromJson from "./slices/GetProductsFromjson"
import quantity from "./slices/GetQuantity"
import dashboardMenu  from "./slices/dashboardSand"
import DashboardDetails from "./slices/DashboardDetails"
import calendar from "./slices/Calendar"

export const store = configureStore({
  reducer: {
    cart: GetProduct,
    sanding: snadingredients,
    products:productsFromJson,
    getQuantity:quantity,
    dashboardSandwichs:dashboardMenu,
    totelde:DashboardDetails,
    calend:calendar
  },
})