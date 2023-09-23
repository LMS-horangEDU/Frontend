import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import dynamic from "next/dynamic";
import Ranking from "@/components/statistics/Ranking";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import badge from "../public/image/badge_01.png";


const WeeklyStudyingTimeGraph = dynamic(() => import('@/components/statistics/WeeklyStudyingTimeGraph'), {
    ssr: false,
});

const StudyingProgressPie = dynamic(() => import('@/components/statistics/StudyingProgressPie'), { ssr: false });

const MyResponsivePie = dynamic(() => import('@/components/statistics/AttendanceJandi'), { ssr: false });
const MyResponsiveRadar = dynamic(() => import('@/components/statistics/CodingMBTI'), { ssr: false });

export default function Home() {
    return (
        <main className={styles.totalTemplate}>
            <section className={styles.topSpanContainer}>
                <span className={styles.hello}>👋 반가워</span>
                <span className={styles.randomComment}>펭구야, 오늘도 즐겁게 코딩해보자!</span>
            </section>
            <section className={styles.topContainer}>
                <div className={styles.weeklyStudyContainer}>
                    <span>이번 주 학습 시간</span>
                    <div className={styles.innerTextContainer}>
                        <div>
                            <p
                                style={{
                                    fontSize: '0.8125rem',
                                    display: 'flex',
                                    position: 'relative',
                                }}
                            >
                                <span style={{ color: '#AAAAAA' }}>총 학습 :</span> 40 시간
                            </p>
                        </div>
                        <div style={{ marginLeft: '1rem' }}>
                            <p
                                style={{
                                    fontSize: '0.8125rem',
                                    display: 'flex',
                                    position: 'relative',
                                }}
                            >
                                <span style={{ color: '#AAAAAA' }}>퀴즈 단계 :</span> 20 단계
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            width: '100%',
                            maxWidth: '35rem',
                            height: '15.81rem',
                        }}
                    >
                        <WeeklyStudyingTimeGraph />
                    </div>
                </div>
                <div className={styles.weeklyStudyContainer}>
                    <span>학습 진행률</span>
                    <div
                        style={{
                            width: '80%',
                            height: '15.81rem',
                        }}
                    >
                        <StudyingProgressPie />
                    </div>
                </div>
            </section>
            <section className={styles.container}>
                <Ranking />
                <MyResponsiveRadar />
                <MyResponsivePie />
                <article className={styles.ly_col_30}>
                    <h2>획득한 뱃지</h2>
                    <Link href={'/'} className={styles.moreInfo}>
                        자세히 보기 <IoIosArrowForward />
                    </Link>
                    <div className={`${styles.contentBox} ${styles.badgeBox}`}>
                        <p>
                            <span>8</span> 개 / 30
                        </p>
                        <Image src={badge} alt="배지바로가기" width={100} height={100} />
                    </div>
                </article>
            </section>
        </main>
    );
}
