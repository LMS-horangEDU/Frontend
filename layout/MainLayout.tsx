import React, { Fragment, ReactNode } from 'react';
import Sidebar from './Sidebar';
import styles from '@/styles/Layout.module.scss';

interface LayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.mainLayout}>
            <Sidebar />
            <main>{children}</main>
        </div>
    );
};

export default MainLayout;
