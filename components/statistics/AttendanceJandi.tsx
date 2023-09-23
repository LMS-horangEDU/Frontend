import React from "react";
import { ResponsiveCalendar } from "@nivo/calendar";
import styles from "@/styles/Home.module.scss";
import test from "./test.json";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const AttendanceJandi = () => {
  return (
    <article className={styles.ly_col_40}>
      <h2>나의 출석 잔디</h2>
      <div className={`${styles.contentBox} ${styles.attendanceBox}`}>
        <div className={styles.calenderRemote}>
          <button>
            <MdOutlineKeyboardArrowLeft />
          </button>
          2023년
          <button>
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
        <div
          className={styles.chartContainer}
          style={{ width: "100%", height: "180px" }}
        >
          <ResponsiveCalendar
            data={test}
            from="2023-06-01"
            to="2023-09-24"
            emptyColor="#eeeeee"
            colors={["#7BC67E"]}
            margin={{ top: 0, right: 10, bottom: 10, left: 20 }}
            yearSpacing={10}
            monthBorderColor="#ffffff"
            dayBorderWidth={2}
            dayBorderColor="#ffffff"
            legends={[
              {
                anchor: "bottom-right",
                direction: "row",
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: "right-to-left",
              },
            ]}
          />
        </div>
        <ul>
          <li>
            <p>
              일간 연속 출석<span>0일</span>
            </p>
          </li>
          <li>
            <p>
              주간 연속 출석<span>0주</span>
            </p>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default AttendanceJandi;
