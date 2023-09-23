import { ResponsivePie } from "@nivo/pie";
import { useRouter } from "next/router";
import styles from "@/styles/Current.module.scss";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { LuMonitorPlay } from "react-icons/lu";

/**progressPie 원본 컴포넌트 */
const StudyingProgressPie = () => (
  <>
    <ResponsivePie
      data={data}
      /* margin={{ top: 43, right: 400, bottom: 43, left: 0 }} */
      startAngle={-8}
      innerRadius={0.75}
      cornerRadius={45}
      colors={["#51c741", "#b0f1ad99"]}
      fit={true}
      enableArcLinkLabels={false}
      enableArcLabels={false}
      arcLabelsRadiusOffset={0.55}
      isInteractive={false}
      legends={[]}
    />
  </>
);

/**내 학습 진행 현황 */
const StudyingProgressPieComponent = () => {
  const router = useRouter();

  return (
    <>
      <div className={styles.spaceBetweenTemplate}>
        <span>
          {router.pathname == "mypage/home"
            ? "학습 진행률"
            : "내 학습 진도현황"}
        </span>
        {router.pathname == "mypage/home" ? (
          <Link href={"/mypage/current"} className={styles.moreInfo}>
            자세히 보기 <IoIosArrowForward />
          </Link>
        ) : null}
      </div>
      <div className={styles.graphContainer}>
        <div className={styles.leftBox}>
          <span>
            <LuMonitorPlay /> 진행중인 강의
          </span>
          <span>화면에 출력하기</span>
          <p>
            38<span className={styles.gray}>/46</span>
          </p>
          <button>
            <span style={{ display: "flex" }}>바로 학습</span>{" "}
            <i>
              <HiOutlineArrowSmRight />
            </i>
          </button>
        </div>
        <div className={styles.studyingProgressPie}>
          <div className={styles.percentage}>70%</div>
          <StudyingProgressPie />
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
  },
  {
    id: "empty",
    label: "empty",
    value: 1 - 70 / 100,
  },
];
