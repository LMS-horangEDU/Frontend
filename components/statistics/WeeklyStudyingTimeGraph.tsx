import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const WeeklyStudyingTimeGraph = () => {
  return (
    <ResponsiveBar
      data={data}
      keys={["studying time"]}
      indexBy="day"
      margin={{ top: 10, right: 0, bottom: 50, left: 20 }}
      padding={0.3}
      minValue={0}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={"#AADBEB"}
      borderRadius={10}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisBottom={{
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: null,
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: "시간",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={false}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      gridYValues={10}
      isInteractive={false}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in day: " + e.indexValue
      }
    />
  );
};

export default WeeklyStudyingTimeGraph;

export const data = [
  {
    day: "월",
    "studying time": 10,
    barColor: "#AADBEB",
  },
  {
    day: "화",
    "studying time": 4,
    barColor: "#AADBEB",
  },
  {
    day: "수",
    "studying time": 8,
    barColor: "#AADBEB",
  },
  {
    day: "목",
    "studying time": 2,
    barColor: "#AADBEB",
  },
  {
    day: "금",
    "studying time": 4,
    barColor: "#AADBEB",
  },
  {
    day: "토",
    "studying time": 2,
    barColor: "#AADBEB",
  },

  {
    day: "일",
    "studying time": 2,
    barColor: "#AADBEB",
  },
];
