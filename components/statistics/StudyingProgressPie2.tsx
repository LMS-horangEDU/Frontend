import { ResponsivePie } from "@nivo/pie";
import { useRouter } from "next/router";
import styles2 from "@/styles/Current.module.scss";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { LuMonitorPlay } from "react-icons/lu";
import { MagnitudeProps } from "@/interface/props";

/**progressPie 원본 컴포넌트 */
interface ValueProps {
  percentage: number;
}

const StudyingProgressPie = ({ percentage }: ValueProps) => {
  const data = [
    {
      id: "studyingProgress",
      label: "studyingProgress",
      value: percentage / 100,
    },
    {
      id: "empty",
      label: "empty",
      value: 1 - percentage / 100,
    },
  ];

  return (
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
};

/**내 학습 진행 현황 */
const StudyingProgressPieComponent = ({ magnitude }: MagnitudeProps) => {
  const router = useRouter();

  const calcPercentage = () => {
    const completeVideoCount = magnitude?.completeVideoCount as number;
    const totalVideoCount = magnitude?.totalVideoCount as number;
    return (completeVideoCount / totalVideoCount) * 100;
  };

  return (
    <>
      <div className={styles2.spaceBetweenTemplate}>
        <span>
          {router.pathname == "mypage/home"
            ? "학습 진행률"
            : "내 학습 진도현황"}
        </span>
        {router.pathname == "mypage/home" ? (
          <Link href={"/mypage/current"} className={styles2.moreInfo}>
            자세히 보기 <IoIosArrowForward />
          </Link>
        ) : null}
      </div>
      <div className={styles2.graphContainer}>
        <div className={styles2.leftBox}>
          <span>
            <LuMonitorPlay /> 진행중인 강의
          </span>
          <span>{magnitude?.progressVideoTitle}</span>
          <p>
            {magnitude?.completeVideoCount}
            <span className={styles2.gray}>/{magnitude?.totalVideoCount}</span>
          </p>
          <button>
            <span style={{ display: "flex" }}>바로 학습</span>{" "}
            <i>
              <HiOutlineArrowSmRight />
            </i>
          </button>
        </div>
        <div className={styles2.studyingProgressPie}>
          <div className={styles2.percentage}>{calcPercentage()}%</div>
          <StudyingProgressPie percentage={calcPercentage()} />
        </div>
      </div>
    </>
  );
};

export default StudyingProgressPieComponent;
