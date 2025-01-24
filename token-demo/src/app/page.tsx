import React from 'react';
import styles from './build/css/general.module.css';

export default function Home() {
  return (
    <div className={styles.desktop1Draft}>
      <div className={styles.desktop1DraftChild} />
      <div className={styles.desktop1DraftItem} />
      <div className={styles.linePatternIcon} />
      <div className={styles.noiseIcon} />
      <div className={styles.coolestPersonAwards}>2025 Coolest Person Awards</div>
      <i className={styles.openForVoting}>Open for voting now</i>
      <div className={styles.coolestPersonAwardsParent}>
        <b className={styles.coolestPersonAwards1}>Coolest person awards</b>
        <div className={styles.pastWinnersParent}>
          <div className={styles.pastWinners}>Past winners</div>
          <div className={styles.pastWinners}>2025 Candidates</div>
          <div className={styles.pastWinners}>About us</div>
          <div className={styles.button}><div className={styles.pastWinners}>Vote now</div></div>
        </div>
      </div>
      <div className={styles.whenYouHave}>
        When you have some text, how can you choose a typeface? Many people—professional designers included—go through an app’s font menu until we find one we like.
      </div>
      <div className={styles.desktop1DraftInner} />
      <div className={styles.vectorIcon} />
      <div className={styles.image16Icon} />
    </div>
  );
}
