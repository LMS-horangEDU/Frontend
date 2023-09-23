import React from "react";
import styles from "@/styles/Ranking.module.scss";
import first from "@/public/image/rank_first.png";
import second from "@/public/image/rank_second.png";
import third from "@/public/image/rank_third.png";
import fourth from "@/public/image/rank_fourth.png";
import fifth from "@/public/image/rank_fifth.png";
import myRank from "@/public/image/rank_my.png";
import line from "@/public/image/rank_line.png";
import Image from "next/image";
import { lmsPageGetApi } from "@/store/server/get";

const ranking = () => {
  const { data } = lmsPageGetApi.useGetRankData();
  // console.log(data?rank[0]);

  return (
    <section className={styles.rankingWrapper}>
      <h1>우리 학급 랭킹보기</h1>
      <div className={styles.contentWrap}>
        <div className={styles.rankingContainer}>
          <Image
            src={line}
            alt="랭킹1위"
            className={styles.line}
            width={840}
            height={800}
          />
          <div className={styles.first}>
            <p>
              <span>{data?.rank[0].school}</span>
              <span>
                {data?.rank[0].grade}학년 {data?.rank[0].class}반
              </span>
              <span>{data?.rank[0].score} P</span>
            </p>
            <Image src={first} alt="랭킹1위" width={240} height={190} />
          </div>
          <div className={styles.second}>
            <p>
              <span>{data?.rank[1].school}</span>
              <span>
                {data?.rank[1].grade}학년 {data?.rank[1].class}반
              </span>
              <span>{data?.rank[1].score} P</span>
            </p>
            <Image src={second} alt="랭킹2위" width={240} height={220} />
          </div>
          <div className={styles.third}>
            <p>
              <span>{data?.rank[2].school}</span>
              <span>
                {data?.rank[2].grade}학년 {data?.rank[2].class}반
              </span>
              <span>{data?.rank[2].score} P</span>
            </p>
            <Image src={third} alt="랭킹3위" width={220} height={190} />
          </div>
          <div className={styles.fourth}>
            <p>
              <span>{data?.rank[3].school}</span>
              <span>
                {data?.rank[3].grade}학년 {data?.rank[3].class}반
              </span>
              <span>{data?.rank[3].score} P</span>
            </p>
            <Image src={fourth} alt="랭킹4위" width={220} height={170} />
          </div>
          <div className={styles.fifth}>
            <p>
              <span>{data?.rank[4].school}</span>
              <span>
                {data?.rank[4].grade}학년 {data?.rank[4].class}반
              </span>
              <span>{data?.rank[4].score} P</span>
            </p>
            <Image src={fifth} alt="랭킹5위" width={220} height={180} />
          </div>
          <div className={styles.myRank}>
            <p>
              <span className={styles.rank}>120</span>
              <span className={styles.title}>우리 반 랭킹</span>
              <span className={styles.school}>호랑 중학교 3학년 2반</span>
              {/* <span className={styles.class}></span> */}
              <span className={styles.score}>305 P</span>
            </p>
          </div>
        </div>
        <div className={styles.rankingBoard}>
          <ul>
            {data?.rank
              .slice(4)
              .map((school: { school: string }, index: number) => (
                <li key={index}>
                  <p>
                    <span className={styles.rank}>{index + 6}</span>
                    {school.school}
                    <span className={styles.point}>304 P</span>
                  </p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ranking;
