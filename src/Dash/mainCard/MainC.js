import React,{useState} from "react";
import Chart from "react-apexcharts";


 export  const MainC = ()=>{
  const [state, setState ] =useState({
    options: {
      stroke: {
        curve: 'smooth',
      },
      chart: {
        toolbar: {
          show: false,
          },
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      },
      {
        name: "series-2",
        data: [30, 20, 2, 10, 49, 60, 75, 60]
      },
      {
        name: "series-3",
        data: [3, 2, 2, 30, 29, 58, 76, 10]
      }
    ]
  }
  ) 
    return(
        <Chart
           options={state.options}
           series={state.series}
           type="line"
           width="352"
  />
    )
  }