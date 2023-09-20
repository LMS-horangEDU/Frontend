import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import Sidebar from '@/layout/Sidebar';
import dynamic from 'next/dynamic';
import Ranking from '@/components/statistics/Ranking';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import badge from '../public/image/badge_01.png';

const MyResponsivePie = dynamic(() => import('../components/statistics/AttendanceJandi'), { ssr: false });
const MyResponsiveRadar = dynamic(() => import('../components/statistics/CodingMBTI'), { ssr: false });

export default function Home() {
    return (
        <section className={styles.container}>
            {/* <Sidebar /> */}
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
    );
}
