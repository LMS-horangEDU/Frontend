import React, { useEffect, useState } from "react";
import styles from "@/styles/Badge.module.scss";
import { BadgeInfoData } from "@/interface/badge";
import axios from "axios";
import Image from "next/image";

const badge = () => {
  const [badgeData, setBadgeData] = useState<BadgeInfoData[]>([]);

  const getMyBadge = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_API_URL}` + `/badge`
      );
      console.log(response.data.badge);
      setBadgeData(response.data.badge);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    getMyBadge();
  }, []);

  const myBadgeCount = (arr: BadgeInfoData[]) => {
    const count = arr.filter((item) => item.isHas === true).length;
    return count;
  };

  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomNumber = getRandomInt(2, 16);
  const classNameWithRandomNum = `num${getRandomNumber}`;

  return (
    <section className={styles.badgeWrapper}>
      <div className={styles.tabMenuController}>
        <button className={styles.checked}>모든 배지</button>
        <button>
          내가 획득한 배지<p>{myBadgeCount(badgeData)}</p>
        </button>
      </div>
      <div className={styles.tabContentContainer}>
        {badgeData.map((badge, index) => (
          <div key={badge.badge} className={styles.flip}>
            <div
              className={`${styles.badge} ${
                badge.isHas === false ? styles.noBadge : ""
              }`}
            >
              <div className={`${styles.front} ${styles[`num${index}`]}`}>
                <div className={styles.img} />
                <p>{badge.badge}</p>
              </div>
              <div className={styles.back}>{badge.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default badge;
