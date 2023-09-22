import { ResponsivePie } from "@nivo/pie";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { LuMonitorPlay } from "react-icons/lu";

const StudyingProgressPie = () => (
  <>
    <ResponsivePie
      data={data}
      /* margin={{ top: 43, right: 400, bottom: 43, left: 0 }} */
      startAngle={-8}
      innerRadius={0.7}
      cornerRadius={45}
      colors={{ scheme: "category10" }}
      fit={true}
      enableArcLinkLabels={false}
      enableArcLabels={false}
      arcLabelsRadiusOffset={0.55}
      isInteractive={false}
      legends={[]}
    />
  </>
);

const StudyingProgressPieComponent = () => {
  return (
    <>
      <div className={styles.spaceBetweenTemplate}>
        <span>학습 진행률</span>
        <Link href={"/"} className={styles.moreInfo}>
          자세히 보기 <IoIosArrowForward />
        </Link>
      </div>
      <div className={styles.graphContainer}>
        <div className={styles.leftBox}>
          <span>
            {" "}
            <LuMonitorPlay /> 진행중인 강의
          </span>
          <span>화면에 출력하기</span>
          <p>
            38<span>/46</span>
          </p>
          <button>
            <span style={{ display: "flex" }}>바로 학습</span>{" "}
            <i>
              <HiOutlineArrowSmRight />
            </i>
          </button>
        </div>
        <div className={styles.studyingProgressPie}>
          <StudyingProgressPie />
          <div className={styles.percentage}>70%</div>
        </div>
      </div>
    </>
  );
};

export default StudyingProgressPieComponent;

export const data = [
  {
    id: "studyingProgress",
    label: "studyingProgress",
    value: 70 / 100,
    color: "#72d44b",
  },
  {
    id: "empty",
    label: "empty",
    value: 1 - 70 / 100,
    color: "#ffffff",
  },
];
