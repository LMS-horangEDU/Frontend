import React from "react";
import Image from "next/image";
import styles from "@/styles/Layout.module.scss";
import { VscHome } from "react-icons/vsc";
import { BsBook } from "react-icons/bs";
import { AiFillPieChart } from "react-icons/ai";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <Image src="/image/logo.png" alt="logo" width={113} height={60} />
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.navButton_active}>
          <VscHome className={styles.icon} />
          <span>마이페이지</span>
        </button>
        <button className={styles.navButton_inActive}>
          <BsBook className={styles.icon} />
          <span>나의 학습 현황</span>
        </button>
        <button className={styles.navButton_inActive}>
          <AiFillPieChart className={styles.icon} />
          <span>나의 학습 통계</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
