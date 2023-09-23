import { ResponsivePie } from "@nivo/pie";
import styles from "@/styles/Current.module.scss";

/**progressPie 원본 컴포넌트 */
const StudyingProgressPie = () => (
  <>
    <ResponsivePie
      data={data}
      /* margin={{ top: 43, right: 400, bottom: 43, left: 0 }} */
      startAngle={-8}
      innerRadius={0.8}
      cornerRadius={45}
      colors={["#a000fd", "#dcb7ff9b"]}
      fit={true}
      enableArcLinkLabels={false}
      enableArcLabels={false}
      arcLabelsRadiusOffset={0.55}
      isInteractive={false}
      legends={[]}
    />
  </>
);

/**수강중인 강의 현황 */
const LectureProgressPieComponent = () => {
  return (
    <>
      <div className={styles.processBar}>
        <div className={styles.percentage}>84%</div>
        <StudyingProgressPie />
      </div>
    </>
  );
};

export default LectureProgressPieComponent;

export const data = [
  {
    id: "studyingProgress",
    label: "studyingProgress",
    value: 84 / 100,
  },
  {
    id: "empty",
    label: "empty",
    value: 1 - 84 / 100,
  },
];
