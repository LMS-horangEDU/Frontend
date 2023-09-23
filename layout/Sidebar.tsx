import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Layout.module.scss";
import { VscHome } from "react-icons/vsc";
import { BsBook } from "react-icons/bs";
import { AiFillPieChart } from "react-icons/ai";
import { SlBadge } from "react-icons/sl";
import { FaRankingStar } from "react-icons/fa6";

const sideBarData = [
  {
    pathname: "/mypage/home",
    icon: <VscHome className={styles.icon} />,
    label: "마이페이지",
  },
  {
    pathname: "/mypage/current",
    icon: <BsBook className={styles.icon} />,
    label: "나의 학습 현황",
  },
  {
    pathname: "/mypage/badge",
    icon: <SlBadge className={styles.icon} />,
    label: "배지",
  },
  {
    pathname: "/mypage/ranking",
    icon: <FaRankingStar className={styles.icon} />,
    label: "랭킹",
  },
  {
    pathname: "/mypage/condingMbti",
    icon: <AiFillPieChart className={styles.icon} />,
    label: "코딩 MBTI",
  },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <Image src="/image/logo.png" alt="logo" width={113} height={60} />
      </div>

      {/* nav button (Tab) */}
      <div className={styles.buttonContainer}>
        {sideBarData.map((index) => (
          <Link href={index.pathname}>
            <button
              className={
                router.pathname === `${index.pathname}`
                  ? styles.navButton_active
                  : styles.navButton_inActive
              }
            >
              {index.icon}
              <span>{index.label}</span>
            </button>
          </Link>
        ))}

        {/* <Link href="/mypage/home">
          <button
            className={
              router.pathname === "/mypage/home"
                ? styles.navButton_active
                : styles.navButton_inActive
            }
          >
            <VscHome className={styles.icon} />
            <span>마이페이지</span>
          </button>
        </Link>
        <button
          className={
            router.pathname === "/mypage/current"
              ? styles.navButton_active
              : styles.navButton_inActive
          }
        >
          <BsBook className={styles.icon} />
          <span>나의 학습 현황</span>
        </button>
        <button className={styles.navButton_inActive}>
          <SlBadge className={styles.icon} />
          <span>배지</span>
        </button>
        <button className={styles.navButton_inActive}>
          <FaRankingStar className={styles.icon} />
          <span>랭킹</span>
        </button>
        <button className={styles.navButton_inActive}>
          <AiFillPieChart className={styles.icon} />
          <span>코딩 MBTI</span>
        </button> */}
      </div>
    </aside>
  );
};

export default Sidebar;
