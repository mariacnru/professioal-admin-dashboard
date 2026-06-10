import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

function Chart_2() {
  const [state, setState] = useState({
    series: [
      {
        name: "فروش",
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 5.4, 2.8, 6.1, 4.7, 3.9],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",

        toolbar: {
          show: false,
        },
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
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],

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
    <div className="grow w-full bg-white mt-10 rounded-md shadow-lg shadow-gray-200 p-5 font-Dana">
      <h3 className="font-semibold text-sm text-gray-700 mb-5">فروش سالانه</h3>
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

export default Chart_2;
