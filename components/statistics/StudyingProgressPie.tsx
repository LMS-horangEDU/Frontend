import { ResponsivePie } from "@nivo/pie";

const StudyingProgressPie = () => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    startAngle={-8}
    innerRadius={0.7}
    cornerRadius={45}
    colors={{ scheme: "category10" }}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    enableArcLinkLabels={false}
    arcLinkLabelsSkipAngle={13}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsOffset={-5}
    arcLinkLabelsThickness={0}
    arcLinkLabelsColor={{ from: "color" }}
    enableArcLabels={false}
    arcLabelsRadiusOffset={0.55}
    arcLabelsSkipAngle={8}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 2]],
    }}
    isInteractive={false}
    defs={[
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "studyingProgress",
        },
        id: "lines",
      },
    ]}
    legends={[]}
  />
);

export default StudyingProgressPie;

export const data = [
  {
    id: "studyingProgress",
    label: "studyingProgress",
    value: 224,
    color: "hsl(265, 70%, 50%)",
  },
];
