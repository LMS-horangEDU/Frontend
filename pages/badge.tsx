import React from 'react';
import styles from '@/styles/Badge.module.scss';

const badge = () => {
    return (
        <section>
            <div className={styles.tabMenuController}>
                <button className={styles.checked}>모든 배지</button>
                <button>
                    내가 획득한 배지<p>6</p>
                </button>
            </div>
            <div className={styles.tabContentContainer}>
                <div className={styles.flip}>
                    <div className={styles.badge}>
                        <div className={styles.front}>앞</div>
                        <div className={styles.back}>뒤</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default badge;
