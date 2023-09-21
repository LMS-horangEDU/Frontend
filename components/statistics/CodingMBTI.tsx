import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';
import styles from '@/styles/Home.module.scss';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

const CodingMBTI = () => {
    const data = [
        {
            subject: 'AI',
            score: 50,
        },
        {
            subject: 'Deep learing',
            score: 10,
        },
        {
            subject: 'Data Science',
            score: 20,
        },
        {
            subject: 'Algorythm',
            score: 10,
        },
        {
            subject: 'UI/UX',
            score: 10,
        },
    ];
    return (
        <article className={styles.ly_col_30}>
            <h2>나의 코딩 MBTI</h2>
            <Link href={'/'} className={styles.moreInfo}>
                자세히 보기 <IoIosArrowForward />
            </Link>
            <div className={`${styles.mbtiBox} ${styles.contentBox}`}>
                <p>
                    펭구는 <span>로봇을 만드는 과학자</span> 타입이야!
                </p>
                <div className={styles.chartContainer} style={{ width: '100%', height: '240px' }}>
                    <ResponsiveRadar
                        data={data}
                        keys={['score']}
                        indexBy="subject"
                        valueFormat=">-.2f"
                        margin={{ top: 40, right: 10, bottom: 10, left: 10 }}
                        borderColor={{ from: 'color' }}
                        gridLabelOffset={20}
                        gridShape="linear"
                        dotSize={10}
                        dotColor={{ theme: 'background' }}
                        dotBorderWidth={2}
                        colors={{ scheme: 'nivo' }}
                        blendMode="multiply"
                        motionConfig="wobbly"
                        legends={[
                            {
                                anchor: 'top-left',
                                direction: 'column',
                                translateX: -50,
                                translateY: -40,
                                itemWidth: 80,
                                itemHeight: 20,
                                itemTextColor: '#999',
                                symbolSize: 12,
                                symbolShape: 'circle',
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemTextColor: '#000',
                                        },
                                    },
                                ],
                            },
                        ]}
                    />
                </div>
            </div>
        </article>
    );
};

export default CodingMBTI;
