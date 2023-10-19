
import { useState,useEffect } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Badge from '@mui/material/Badge';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { ReactComponent as Youtube } from "../icons/youtube.svg"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import {clearstate} from "../RTK/slices/CustomSandingredients"

const Calendar = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState("");
  const [highlightedDays, setHighlightedDays] = useState([1, 2]);
  const GetOrdersFromState = useSelector((state) => state.calend);
  console.log("date is", value);

  useEffect(() => {
    dispatch(clearstate())
})

  return (
    <div className="container py-32 px-0">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          // mask='____/__/__'
          variant='static'
          orientation='portrait'
          // value={value}
          disableFuture
          onChange={(newValue) => setValue((new Date(newValue)).toLocaleDateString("es-CL").split("-").reverse().join("-"))}
          renderDay={(day, _value, DayComponentProps) => {
            const isSelected =
              !DayComponentProps.outsideCurrentMonth &&
              highlightedDays.indexOf(day.getDate()) >= 0;

            return (
              <Badge
                key={day.toString()}
                overlap='circular'
                badgeContent={isSelected ? <Youtube className="text-red-500" /> : undefined}
              >
                <PickersDay {...DayComponentProps} />
              </Badge>
            );
          }}
        />
      </LocalizationProvider>
      <p className="text-orange-500 p-5 text-2xl">All Orders :</p>
      <div className="">
        {
          value ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-8 gap-10">
              {GetOrdersFromState.map((ele, ind) => {
                if (ele.SandDete == value) {
                  return (
                    <div className="flex justify-center items-center flex-col">
                      <p className="text-orange-500 text-xl mb-2">Day: {ele.SandDete}</p>
                      <p className="text-orange-500 text-xl mb-4">Number Of Orders: {ele.SandOrders.length}</p>
                      <Link to={`/calendar/${ind}`} className="bg-orange-500 text-slate-200 p-2 pr-5 pl-5 rounded-2xl hover:bg-orange-700 duration-300">Show Order</Link>
                    </div>
                  )
                } else {
                  return (
                    console.log("d")
                  )
                }
              })}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-8 gap-10">
              {GetOrdersFromState.map((ele, ind) => (
                <div className="flex justify-center items-center flex-col">
                  <p className="text-orange-500 text-xl mb-2">Day: {ele.SandDete}</p>
                  <p className="text-orange-500 text-xl mb-4">Number Of Orders: {ele.SandOrders.length}</p>
                  <Link to={`/calendar/${ind}`} className="bg-orange-500 text-slate-200 p-2 pr-5 pl-5 rounded-2xl hover:bg-orange-700 duration-300">Show Order</Link>
                </div>
              ))}
            </div>
          )
        }

      </div>
    </div>
  );
};

export default Calendar;
