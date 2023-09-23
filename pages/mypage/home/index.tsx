import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Ranking from "@/components/statistics/Ranking";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import badge from "@/public/image/badge_01.png";
import StudyingProgressPieComponent from "@/components/statistics/StudyingProgressPie";
import WeeklyStudyingTimeGraph from "@/components/statistics/WeeklyStudyingTimeGraph";
import AttendanceJandi from "@/components/statistics/AttendanceJandi";
import CodingMBTI from "@/components/statistics/CodingMBTI";
import { lmsPageGetApi } from "@/store/server/get";

export default function Home() {
  const { data } = lmsPageGetApi.useGetMainData();
  console.log(data);

  return (
    <main className={styles.totalTemplate}>
      <section className={styles.topSpanContainer}>
        <span className={styles.hello}>👋 반가워</span>
        <span className={styles.randomComment}>
          펭구야, 오늘도 즐겁게 코딩해보자!
        </span>
      </section>
      <section className={styles.topContainer}>
        <div className={styles.weeklyStudyContainer}>
          <span>이번 주 학습 시간</span>
          <div className={styles.graphContainer}>
            <div className={styles.innerTextContainer}>
              <div>
                <p>
                  <span>총 학습 :</span> 40 시간
                </p>
              </div>
              <div style={{ marginLeft: "1rem" }}>
                <p>
                  <span>퀴즈 단계 :</span> 20 단계
                </p>
              </div>
            </div>
            <WeeklyStudyingTimeGraph />
          </div>
        </div>
        <section className={styles.studyingProgressContainer}>
          <StudyingProgressPieComponent magnitude={data?.magnitude} />
        </section>
      </section>
      <section className={styles.container}>
        <Ranking />
        <CodingMBTI />
        <AttendanceJandi />
        <article className={styles.ly_col_30}>
          <h2>획득한 뱃지</h2>
          <Link href={"/mypage/badge"} className={styles.moreInfo}>
            자세히 보기 <IoIosArrowForward />
          </Link>
          <div className={`${styles.contentBox} ${styles.badgeBox}`}>
            <p>
              <span>{data?.badgeCount}</span> 개 / 30
            </p>
            <Image src={badge} alt="배지바로가기" width={100} height={100} />
          </div>
        </article>
      </section>
    </main>
  );
}
