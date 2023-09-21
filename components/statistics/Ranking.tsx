import React from 'react';
import styles from '@/styles/Home.module.scss';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

const Ranking = () => {
    const mockData = new Map([
        ['호랑 중학교 3학년 4반', 334],
        ['불암 중학교 3학년 5반', 200],
        ['태랑 중학교 3학년 1반', 180],
        ['공릉 중학교 2학년 3반', 120],
        ['성수 중학교 3학년 4반', 70],
    ]);
    const myScoreMockData = {
        school: '호랑 중학교 1학년 2반',
        score: 23,
    };

    return (
        <article className={styles.ly_col_30}>
            <h2>랭킹</h2>
            <Link href={'/'} className={styles.moreInfo}>
                자세히 보기 <IoIosArrowForward />
            </Link>
            <div className={styles.contentBox}>
                <ul className={styles.rankingList}>
                    <li>
                        <p>
                            <span className={styles.rank}>134</span>
                            {myScoreMockData.school}
                            <span className={styles.score}>{myScoreMockData.score} P</span>
                        </p>
                    </li>
                    {Array.from(mockData).map(([school, score], index) => (
                        <li key={school}>
                            <p>
                                <span className={styles.rank}>{index + 1}</span>
                                {school}
                                <span className={styles.score}>{score} P</span>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
};

export default Ranking;
