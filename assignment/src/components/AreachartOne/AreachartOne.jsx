import React from "react";
import ReactApexChart from "react-apexcharts";

const AreaChartOne = ({title, percentage, theme, dataSet}) => {
  const [state, setState] = React.useState({
    series: [
      {
        name: "Inventory",
        data: dataSet,
      },
    ],
    options: {
      chart: {
        height: 170,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      colors: [`${theme}`],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      grid: {
        show: false,
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: { show: false },
      },
      yaxis: {
        min: 0,
        show: false,
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
        position: "relative",
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <select
          style={{
            background: "none",
            border: 0,
            margin: "10px",
            fontSize: "14px",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            color: "#fff",
            fontFamily: "var(--font-one)",
          }}
        >
          <option value="">7 days</option>
          <option value="">15 days</option>
          <option value="">30 days</option>
        </select>
      </div>
      <div
        style={{
          color: "#ffffff",
          position: "absolute",
          left: "20px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-one)",
            fontWeight: 400,
            fontSize: "16px",
            letterSpacing: "-0.01em",
            opacity: "80%",
            marginBottom:"5px"
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontFamily: "var(--font-one)",
            fontWeight: 600,
            fontSize: "32px",
            letterSpacing: "-0.01em",
            opacity: "80%",
          }}
        >
          {percentage}
        </p>
      </div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="area"
          height={170}
        />
      </div>
    </div>
  );
};

export default AreaChartOne;
