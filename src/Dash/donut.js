import React, { useState } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";
const WidthControl = styled.div`
width:0;
margin:0;
margin-left:-20px;
margin-bottom:-20px;
`

export const Donut = () => {
  const [state, setState] = useState({
    series: [70,30],
    options: {
      chart: {
        width: 20,
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      legend: {
        show: false,},
      // responsive: [
      //   {
      //     breakpoint: 480,
      //     options: {
      //       chart: {
      //         width: "0",
      //       },
            
      //     },
      //   },
      // ],
    },
  });

  return (
    <WidthControl>
      <Chart
      options={state.options}
      series={state.series}
      type="donut"
      width={110}
    />
    </WidthControl>
    
  );
};
