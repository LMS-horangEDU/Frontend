import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Layout.module.scss";

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <header className={styles.header}>
      <section className={styles.myInfoContainer}>
        <span>Lv.4 펭구</span>
        <Image
          src="/image/studentTestPic.png"
          alt="studentPic"
          width={40}
          height={40}
        />
        <Image
          src="/icon/downButton.svg"
          alt="downButton"
          width={20}
          height={20}
          style={{ marginLeft: "0.25rem", cursor: "pointer" }}
          onClick={() => setIsToggle(!isToggle)}
        />
        {/* 학생 정보 모달 (toggle) */}
        {isToggle == false ? null : (
          <div className={styles.modal}>
            <Image
              src="/image/studentTestPic.png"
              alt="studentPic"
              width={100}
              height={100}
            />
            <span className={styles.name}>김 펭구</span>
            <span className={styles.schoolName}>떡잎 초등학교</span>
            <span className={styles.classInfo}>3학년 2반 10번</span>
            <u>로그아웃</u>
          </div>
        )}
      </section>
    </header>
  );
};

export default Header;
