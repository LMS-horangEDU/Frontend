import React from "react";
import Image from "next/image";
import styles from "@/styles/Layout.module.scss";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <Image src="/image/logo.png" alt="logo" width={113} height={60} />
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.navButton_active}>
          <Image
            src="/icon/home_white.svg"
            alt="home_white"
            width={20}
            height={20}
          />{" "}
          마이페이지
        </button>
        <button className={styles.navButton_inActive}>나의 학습 현황</button>
        <button className={styles.navButton_inActive}>나의 학습 통계</button>
      </div>
    </aside>
  );
};

export default Sidebar;
