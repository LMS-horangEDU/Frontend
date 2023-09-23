import React from "react";
import styles from "@/styles/Coding-mbti.module.scss";
import Image from "next/image";
import { CodingMbtiComponent } from "@/components/statistics/CodingMBTI";
import { lmsPageGetApi } from "@/store/server/get";

function index() {
  const { data } = lmsPageGetApi.useGetMbtiData();

  console.log(data);
  return (
    <main className={styles.totalTemplate}>
      <section className={styles.topContainer}>
        <span>나의 코딩 MBTI</span>
        <div className={styles.myCodingMbtiBox}>
          <div className={styles.leftSide}>
            <div style={{ paddingBottom: "1rem" }}>
              <CodingMbtiComponent />
            </div>
            <div className={styles.result}>
              <span>나의 코딩 적성 평가 결과</span>
              <section>
                <div>
                  <span>AI</span>
                  <span>50</span>
                </div>
                <div>
                  <span>Deep Learning</span>
                  <span>15</span>
                </div>
                <div>
                  <span>UI/UX</span>
                  <span>10</span>
                </div>
                <div>
                  <span>Data Science</span>
                  <span>20</span>
                </div>
                <div>
                  <span>Data Science</span>
                  <span>23</span>
                </div>
              </section>
            </div>
          </div>

          <div className={styles.rightSide}>
            <div className={styles.title}>
              펭구의 코딩 MBTI는 <span>로봇을 만드는 개발자</span> 타입이야 !
            </div>
            <Image
              src="/image/developer1.png"
              alt="developer"
              width={231}
              height={169}
              className={styles.image}
            />
            <p>
              로봇을 만드는 개발자는 AI 개발자라고도 해! AI개발자는 데이터
              사이언티스트 중에 일부인 머신러닝과 딥러닝 알고리즘을 전문적으로
              개발하는 개발자야! 예를 들어 유튜브를 보면서 내가 선호하는 영상이
              어떤 건지 판단하여, 상위에 내가 좋아할 만한 영상을 띄워준다던가,
              좋아하는 노래를 반복적으로 듣다 보면 해당되는 리듬과 박자가 비슷한
              음악을 추천해준다던가 하는 학습과 판단을 할 수 있는 프로그램을
              개발하는 사람이야
            </p>
          </div>
        </div>
      </section>

      {/* 수강중인 강의 */}
      <section className={styles.container}>
        <article className={styles.ly_col_30}>
          <h2>코딩 MBTI 종류</h2>

          <section>
            <div className={styles.mbtiBox}>
              {" "}
              <Image
                src="/image/developer2.png"
                alt="developer"
                width={153}
                height={115}
              />
              <div>
                <span>데이터 사이언티스트</span>
                <p>
                  데이터 사이언티스트는 회사의 모든 데이터들을 저장, 분석,
                  그리고 관리하는 역할을 하는 직업이며, 주로 필요한 데이터들을
                  필요한 사람들에게 정보를 주며 의사 결정을 하는데 도움을 주는
                  역할을 수행합니다.{" "}
                </p>
              </div>
            </div>
            <div className={styles.mbtiBox}>
              {" "}
              <Image
                src="/image/developer3.png"
                alt="developer"
                width={153}
                height={115}
              />
              <div>
                <span>데이터 사이언티스트</span>
                <p>
                  데이터 사이언티스트는 회사의 모든 데이터들을 저장, 분석,
                  그리고 관리하는 역할을 하는 직업이며, 주로 필요한 데이터들을
                  필요한 사람들에게 정보를 주며 의사 결정을 하는데 도움을 주는
                  역할을 수행합니다.{" "}
                </p>
              </div>
            </div>
            <div className={styles.mbtiBox}>
              {" "}
              <Image
                src="/image/developer1.png"
                alt="developer"
                width={153}
                height={115}
              />
              <div>
                <span>데이터 사이언티스트</span>
                <p>
                  데이터 사이언티스트는 회사의 모든 데이터들을 저장, 분석,
                  그리고 관리하는 역할을 하는 직업이며, 주로 필요한 데이터들을
                  필요한 사람들에게 정보를 주며 의사 결정을 하는데 도움을 주는
                  역할을 수행합니다.{" "}
                </p>
              </div>
            </div>
            <div className={styles.mbtiBox}>
              {" "}
              <Image
                src="/image/developer3.png"
                alt="developer"
                width={153}
                height={115}
              />
              <div>
                <span>데이터 사이언티스트</span>
                <p>
                  데이터 사이언티스트는 회사의 모든 데이터들을 저장, 분석,
                  그리고 관리하는 역할을 하는 직업이며, 주로 필요한 데이터들을
                  필요한 사람들에게 정보를 주며 의사 결정을 하는데 도움을 주는
                  역할을 수행합니다.{" "}
                </p>
              </div>
            </div>
            <div className={styles.mbtiBox}>
              {" "}
              <Image
                src="/image/developer2.png"
                alt="developer"
                width={153}
                height={115}
              />
              <div>
                <span>데이터 사이언티스트</span>
                <p>
                  데이터 사이언티스트는 회사의 모든 데이터들을 저장, 분석,
                  그리고 관리하는 역할을 하는 직업이며, 주로 필요한 데이터들을
                  필요한 사람들에게 정보를 주며 의사 결정을 하는데 도움을 주는
                  역할을 수행합니다.{" "}
                </p>
              </div>
            </div>
          </section>
        </article>
      </section>
    </main>
  );
}

export default index;
