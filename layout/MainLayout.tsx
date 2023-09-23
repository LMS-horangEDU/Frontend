import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";
import styles from "@/styles/Layout.module.scss";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const HeaderOrNot = () => {
  const router = useRouter();

  if (
    router.pathname === "/mypage/home" ||
    router.pathname === "/mypage/current"
  ) {
    return <Header />;
  } else {
    return null;
  }
};

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <HeaderOrNot />
      <main className={styles.mainStyle}>{children}</main>
    </div>
  );
};

export default MainLayout;
