import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Current.module.scss";
import { LuMonitorPlay } from "react-icons/lu";
import StudyingProgressPieComponent from "@/components/statistics/StudyingProgressPie2";
import LectureProgressPieComponent from "../../../components/statistics/LectureProgressPie";

/** 수강중인 박스 */
const LectureBox = () => {
  return (
    <>
      <div className={styles.lectureBox}>
        <div className={styles.left}>
          <LuMonitorPlay />
          화면에 출력하기
        </div>
        <div className={styles.right}>
          <span>수강중</span>
          <p>
            41<span>/46</span>
          </p>
          <div>
            <LectureProgressPieComponent />
          </div>
        </div>
      </div>
      <div className={styles.lectureBox}>
        <div className={styles.left}>
          <LuMonitorPlay />
          화면에 출력하기
        </div>
        <div className={styles.right}>
          <span>수강중</span>
          <p>
            41<span>/46</span>
          </p>
          <div>
            <LectureProgressPieComponent />
          </div>
        </div>
      </div>
      <div className={styles.lectureBox}>
        <div className={styles.left}>
          <LuMonitorPlay />
          화면에 출력하기
        </div>
        <div className={styles.right}>
          <span>수강중</span>
          <p>
            41<span>/46</span>
          </p>
          <div>
            <LectureProgressPieComponent />
          </div>
        </div>
      </div>
    </>
  );
};

/**수강완료 강의 */
const CompleteLectureBox = () => {
  return (
    <>
      <div className={styles.lectureBox}>
        <div className={styles.left}>
          <LuMonitorPlay />
          화면에 출력하기
        </div>
        <div className={styles.right}>
          <span>수강중</span>
          <p>
            41<span>/46</span>
          </p>
          <div>
            <LectureProgressPieComponent />
          </div>
        </div>
      </div>
      <div className={styles.lectureBox}>
        <div className={styles.left}>
          <LuMonitorPlay />
          화면에 출력하기
        </div>
        <div className={styles.right}>
          <span>수강중</span>
          <p>
            41<span>/46</span>
          </p>
          <div>
            <LectureProgressPieComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default function Current() {
  /**true: 수강완료 강의 탭, false (default): 수강중인 강의 탭 이 활성화 */
  const [isLectureToggle, setIsLectureToggle] = useState(false);

  const lectureToggleHandler = () => {
    setIsLectureToggle(!isLectureToggle);
  };

  return (
    <main className={styles.totalTemplate}>
      <section className={styles.topContainer}>
        {/* 내 학습 진도현황 */}
        <div className={styles.studyingProgressContainer}>
          <StudyingProgressPieComponent />
        </div>

        {/* 퀴즈 적중률 */}
        <div className={styles.quizContainer}>
          <span>퀴즈 적중률</span>
          <div className={styles.grayBox}>
            <div className={styles.whiteBox}>
              <span>퀴즈 진행 상황</span>
              <div>
                <p>
                  26 / <span> 240</span>
                </p>
                <span>내가 푼 퀴즈</span>
              </div>
            </div>
            <div className={styles.whiteBox}>
              <span>퀴즈로 얻은 포인트</span>
              <div>
                <p>
                  <span className={styles.up}>
                    <Image src="/icon/up.svg" alt="up" width={10} height={10} />{" "}
                    20
                  </span>{" "}
                  200 P
                </p>
                <span>최근 일주일 기준</span>
              </div>
            </div>
            <div className={styles.whiteBox}>
              <span>내 퀴즈 정답률</span>
              <div>
                <p>
                  <span className={styles.down}>
                    <Image
                      src="/icon/down.svg"
                      alt="up"
                      width={10}
                      height={10}
                    />{" "}
                    20
                  </span>{" "}
                  78.4%
                </p>
                <span>최근 일주일 기준</span>
              </div>
            </div>
            <div className={styles.whiteBox}>
              <span>퀴즈 진행 상황</span>
              <div>
                <p>
                  26 / <span> 240</span>
                </p>
                <span>내가 푼 퀴즈</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 수강중인 강의 */}
      <section className={styles.lectureContainer}>
        <div className={styles.lectureToggleButtonDiv}>
          <div
            className={
              isLectureToggle == false ? styles.active : styles.inActive
            }
            onClick={lectureToggleHandler}
          >
            수강중인 강의
          </div>
          <div
            className={
              isLectureToggle == true ? styles.active : styles.inActive
            }
            onClick={lectureToggleHandler}
          >
            수강완료 강의
          </div>
        </div>
        {isLectureToggle == false ? <LectureBox /> : <CompleteLectureBox />}
      </section>
    </main>
  );
}
