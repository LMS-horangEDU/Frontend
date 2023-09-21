import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";

const WeeklyStudyingTimeGraph = dynamic(
  () => import("../components/statistics/WeeklyStudyingTimeGraph"),
  { ssr: false }
);

const StudyingProgressPie = dynamic(
  () => import("../components/statistics/StudyingProgressPie"),
  { ssr: false }
);

export default function Home() {
  return (
    <main className={styles.totalTemplate}>
      <div className={styles.topSpanContainer}>
        <span className={styles.hello}>👋 반가워</span>
        <span className={styles.randomComment}>
          펭구야, 오늘도 즐겁게 코딩해보자!
        </span>
      </div>
      <div className={styles.topContainer}>
        <div className={styles.weeklyStudyContainer}>
          <span>이번 주 학습 시간</span>
          <div className={styles.innerTextContainer}>
            <div>
              <span
                style={{
                  fontSize: "0.8125rem",
                  display: "flex",
                  position: "relative",
                }}
              >
                <p style={{ color: "#AAAAAA" }}>총 학습 :</p> 40 시간
              </span>
            </div>
            <div style={{ marginLeft: "1rem" }}>
              <span
                style={{
                  fontSize: "0.8125rem",
                  display: "flex",
                  position: "relative",
                }}
              >
                <p style={{ color: "#AAAAAA" }}>퀴즈 단계 :</p> 20 단계
              </span>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              maxWidth: "35rem",
              height: "15.81rem",
            }}
          >
            <WeeklyStudyingTimeGraph />
          </div>
        </div>
        <div className={styles.weeklyStudyContainer}>
          <span>학습 진행률</span>
          <div
            style={{
              width: "80%",
              height: "15.81rem",
            }}
          >
            <StudyingProgressPie />
          </div>
        </div>
      </div>
    </main>
  );
}
