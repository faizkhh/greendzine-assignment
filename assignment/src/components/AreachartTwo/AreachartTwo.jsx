import React from "react";
import ReactApexChart from "react-apexcharts";

const AreachartTwo = ({dataSet}) => {
  const [state, setState] = React.useState({
    series: [
      {
        name: "",
        data: dataSet,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      colors: ["#A9FF0A"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      xaxis: {
        categories: [
          "12th Oct",
          "13th Oct",
          "14th Oct",
          "15th Oct",
          "16th Oct",
          "17th Oct",
        ],
        labels: {
          style: {
            colors: "#FFFFFFCC",
            fontFamily:"var(--font-four)",
            fontSize:"12px",
          },
        },
      },
      tooltip: {
        enabled:true,
        theme:"dark",
        x:{
          show:false
        },
        marker:{
          show:false
        },
        shared:false,
        y:{
          formatter: function(value){
            return `${value}%`;
          },
        },
      },
      yaxis: {
        min: 0, // Start at 25
        max: 100, // End at 100
        tickAmount: 4,
        labels: {
          formatter: function(value){
            if(value === 0){
              return ""
            }
            return `${value}%`
          },
          style: {
            colors: "#FFFFFFCC",
            fontFamily:"var(--font-four)",
            fontSize:"13px"
          },
        },
      },
    },
  });
  return (
    <div
      style={{
        backgroundColor: "#2D2D2D80",
        borderRadius: "20px",
        width:650,
        margin:"0px 0px 0px 50px",
        padding:"10px"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems:"center", margin:"10px 18px"}}>
        <div>
          <p style={{
            fontFamily:"var(--font-four)",
            fontWeight:600,
            fontSize: "28px",
            letterSpacing:"-0.01em",
            color:"#fff",
            opacity:"80%"
          }}>Margin %</p>
        </div>
        <select
          style={{
            background: "none",
            border: 0,
            margin: "10px",
            fontSize: "14px",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            color: "#fff",
            fontFamily: "var(--font-four)",
          }}
        >
          <option value="">7 days</option>
          <option value="">15 days</option>
          <option value="">30 days</option>
        </select>
      </div>

      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default AreachartTwo;
