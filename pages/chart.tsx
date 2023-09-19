import dynamic from "next/dynamic";

const MyResponsivePie = dynamic(
  () => import("../components/statistics/AttendanceJandi"),
  { ssr: false }
);
import AttendanceJandi from "@/components/statistics/AttendanceJandi";

const Chart = () => {
  return (
    <div style={{ height: "100vh", margin: "4rem" }}>
      <MyResponsivePie />;
    </div>
  );
};
export default Chart;
