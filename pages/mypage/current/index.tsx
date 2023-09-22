import { useState, useEffect } from "react";
import Image from "next/image";
/* import styles from "@/styles/Current.module.scss"; */
import styles from "@/styles/Home.module.scss";
import dynamic from "next/dynamic";
import Link from "next/link";
import { LuMonitorPlay } from "react-icons/lu";

const StudyingProgressPie = dynamic(
  () => import("@/components/statistics/StudyingProgressPie"),
  { ssr: false }
);

export default function Current() {
  return (
    <main className={styles.totalTemplate}>
      <section className={styles.topContainer}>
        <div className={styles.studyingProgressContainer}>
          <StudyingProgressPie />
        </div>
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
                <p>78.4%</p>
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
      <section className={styles.lectureContainer}>
        <div className={styles.lectureToggleButtonDiv}>
          <div>수강중인 강의</div>
          <div>수강완료 강의</div>
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
            <div>프</div>
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
            <div>프</div>
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
            <div>프</div>
          </div>
        </div>
      </section>
    </main>
  );
}
