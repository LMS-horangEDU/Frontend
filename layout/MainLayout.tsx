import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import styles from "@/styles/Layout.module.scss";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <Sidebar />
      <Header />
      <main className={styles.mainStyle}>{children}</main>
    </div>
  );
};

export default MainLayout;
