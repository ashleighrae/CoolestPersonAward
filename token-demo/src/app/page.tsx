import React from 'react';
import styles from './build/css/general.module.css';

export default function Home() {
  return (
    <div className={styles.desktop1Draft}>
      <div className={styles.desktop1DraftChild} />
      <div className={styles.desktop1DraftItem} />
      <div className={styles.linePatternIcon} />
      <div className={styles.noiseIcon} />
      <div className={styles.frameParent}>
        <div className={styles.coolestPersonAwardsParent}>
          <i className={styles.coolestPersonAwards}>Coolest Person Awards</i>
          <div className={styles.menuitemParent}>
            <div className={styles.menuitem}>
              <div className={styles.candidates}>Past Winners</div>
            </div>
            <div className={styles.menuitem}>
              <div className={styles.candidates}>{`Categories & Candidates `}</div>
            </div>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <div className={styles.button}>
            <div className={styles.candidates}>Vote now</div>
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.weMakeBeingCoolAnOlympicParent}>
          <div className={styles.weMakeBeingContainer}>
            <p className={styles.weMakeBeing}>We Make Being Cool</p>
            <p className={styles.weMakeBeing}>an Olympic Sport</p>
          </div>
          <i className={styles.awardsOpenFor}>Awards open for voting now</i>
        </div>
        <div className={styles.forgetTheOscars}>Forget the Oscars. Those are for people that can cry on cue. We reward the people who actually make life intresting.</div>
        <div className={styles.button2}>
          <div className={styles.voteNow1}>Vote Now</div>
        </div>
      </div>
      <div className={styles.ohGodWhatIsThis}>
        <div className={styles.dolly}>
          <div className={styles.subtractIcon} />
          <div className={styles.file2Icon} />
        </div>
        <div className={styles.header}>😎</div>
        <div className={styles.header1}>👑</div>
      </div>
    </div>
  );
}
