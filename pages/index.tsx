import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Sidebar from '@/layout/Sidebar';
import AttendanceJandi from '@/components/statistics/AttendanceJandi';

import dynamic from 'next/dynamic';
import Ranking from '@/components/statistics/Ranking';

const MyResponsivePie = dynamic(() => import('../components/statistics/AttendanceJandi'), { ssr: false });

export default function Home() {
    return (
        <div>
            {/* <Sidebar /> */}
            {/* <MyResponsivePie /> */}
            <Ranking />
        </div>
    );
}
