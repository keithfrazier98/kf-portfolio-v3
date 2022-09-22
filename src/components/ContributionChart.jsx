import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { getContributionData } from "../requests/graphql";

export default function ContributionChart() {
  const queryOptions = { staleTime: 300000, cacheTime: 300000 };
  const { data: contributionData, isLoading } = useQuery(["contribution_data"], getContributionData, queryOptions);

  const [series, setSeries] = useState();

  useEffect(() => {
    console.log(contributionData);
    if (contributionData?.weeks) {
      const totalData = [
        {
          name: "Sunday",
          data: [],
        },
        {
          name: "Monday",
          data: [],
        },
        {
          name: "Tuesday",
          data: [],
        },
        {
          name: "Wednesday",
          data: [],
        },
        {
          name: "Thursday",
          data: [],
        },
        {
          name: "Friday",
          data: [],
        },
        {
          name: "Saturday",
          data: [],
        },
      ];

      contributionData?.weeks?.forEach((week) => {
        week.contributionDays.forEach((day, index) => {
          //   console.log(day.contributionCount);
          totalData[index] = { ...totalData[index], data: [...totalData[index].data, day.contributionCount] };
        });
      });

      console.log(contributionData);
      setSeries([...totalData]);
    }
  }, [isLoading, contributionData?.weeks]);

  const options = {
    chart: {
      height: "150px",
      type: "heatmap",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#00fbde"],
    title: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    stroke: {
      show: false,
    },
    plotOptions: {
      heatmap: {
        radius: 0,
        shadeIntensity: 1,
      },
      colorScale: {
        
        min: 0,
        max: 10,
      },
    },
    grid: {
      show: false,
    },
    tooltip: {
      marker: { show: false },
    },
    yaxis: {
      show: false,
    },
  };

  if (series)
    return (
      <div className="flex items-center">
        <div className="grid h-full grid-rows-7 grid-cols-1 text-xs text-right">
          {["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"].map((day, index) => (
            <p className={`${index % 2 === 0  ? "text-gray-100": ""}`}>{day}</p>
          ))}
        </div>
        <div className="flex-grow">
          <ReactApexChart options={options} series={series} type="heatmap" height={180} />
        </div>
      </div>
    );
  return <></>;
}
