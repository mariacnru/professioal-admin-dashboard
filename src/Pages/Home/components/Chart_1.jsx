import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

function Chart_1() {
  const [state, setState] = useState({
    series: [
      {
        name: "فروش",
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: "top",
          },
        },
      },

      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },

      xaxis: {
        categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],

        position: "top",

        axisBorder: {
          show: false,
        },

        axisTicks: {
          show: false,
        },

        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },

        tooltip: {
          enabled: true,
        },
      },

      yaxis: {
        axisBorder: {
          show: false,
        },

        axisTicks: {
          show: false,
        },

        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          },
        },
      },
    },
  });

  return (
    <div className="w-100 bg-white mt-10 rounded-md shadow-lg p-5 font-Dana">
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
}

export default Chart_1;
