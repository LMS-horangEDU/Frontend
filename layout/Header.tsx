import React from "react";
import Image from "next/image";
import styles from "@/styles/Layout.module.scss";

const Header = () => {
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
          style={{ marginLeft: "0.25rem" }}
        />
      </section>
    </header>
  );
};

export default Header;
