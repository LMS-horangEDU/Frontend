import React from 'react';
import styles from '@/styles/Ranking.module.scss';
import first from '@/public/image/rank_first.png';
import second from '@/public/image/rank_second.png';
import third from '@/public/image/rank_third.png';
import fourth from '@/public/image/rank_fourth.png';
import fifth from '@/public/image/rank_fifth.png';
import myRank from '@/public/image/rank_my.png';
import Image from 'next/image';

const ranking = () => {
    return (
        <section className={styles.rankingWrapper}>
            <h1>우리 학급 랭킹보기</h1>
            <div className={styles.contentWrap}>
                <div className={styles.rankingContainer}>
                    <div className={styles.first}>
                        <Image src={first} alt="배지바로가기" width={220} height={170} />
                    </div>
                    <div className={styles.second}>
                        <Image src={second} alt="배지바로가기" width={220} height={200} />
                    </div>
                    <div className={styles.third}>
                        <Image src={third} alt="배지바로가기" width={190} height={160} />
                    </div>
                    <div className={styles.fourth}>
                        <Image src={fourth} alt="배지바로가기" width={220} height={170} />
                    </div>
                    <div className={styles.fifth}>
                        <Image src={fifth} alt="배지바로가기" width={220} height={170} />
                    </div>
                    <div className={styles.myRank}>
                        <Image src={myRank} alt="배지바로가기" width={320} height={150} />
                    </div>
                </div>
                <div className={styles.rankingBoard}>
                    <ul>
                        <li>
                            <p>
                                <span className={styles.rank}>1</span>랭킹입니다
                                <span className={styles.point}>304 P</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ranking;
