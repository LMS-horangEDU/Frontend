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

  if (router.pathname == "/mypage/badge" || "/mypage/ranking") return null;
  if (router.pathname == "/mypage/home" || "/mypage/current") return <Header />;
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
