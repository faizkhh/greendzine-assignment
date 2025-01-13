import React from "react";
import ReactApexChart from "react-apexcharts";

const Piechart = ({remaining = 0, consumed = 0}) => {
  const [state, setState] = React.useState({
    series: [remaining, consumed],
    options: {
      chart: { type: "donut" },
      labels: ["Remaining", "Consumed"],
      colors: ["#3769FF", "#FFBE0A"],
      legend: {
        position: "bottom",
        labels:{
          colors:["#fff", "#fff"],
        },
        markers: { width: 12, height: 12 },
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%', // Size of the donut hole
          }
        }
      },
      tooltip: {
        enabled: false,
      },
    },
  });

  return (
    <div
      style={{
        backgroundColor: "#2D2D2D80",
        borderRadius: "20px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent:"space-between"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            margin: "20px",
            fontFamily: "var(--font-one)",
            fontWeight: 600,
            fontSize: "17px",
            letterSpacing: "-0.01em",
            color: "#FFFFFF",
            opacity: "80%",
          }}
        >
          Battery
        </p>
        <p
          style={{
            margin: "20px",
            fontFamily: "var(--font-one)",
            fontWeight: 600,
            fontSize: "20px",
            letterSpacing: "0.04em",
            color: "#FFFFFF",
            opacity: "80%",
          }}
        >
          ...
        </p>
      </div>
      <div id="chart" style={{height:"400px", position:"relative"}}>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="donut"
        />
        <div
          style={{
            position: "absolute",
            top: "27.45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "32px",
            fontWeight: "700",
            color: "#FFFFFF",
            fontFamily:"var(--font-four)"
          }}
        >
          {remaining}%
        </div>
      </div>
    </div>
  );
};

export default Piechart;
