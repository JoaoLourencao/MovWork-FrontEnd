import Styles from "../styles/components/ProgressBar.module.css";
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";

export function ProgressBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentExperience*100)/experienceToNextLevel;

  return (
    <header className={Styles.progressBar}>
        <span>0 xp</span>
        <div>
          <div style={{width: `${percentToNextLevel}%`}}/>

          <span className={Styles.currentProgress} style={{ left:`${percentToNextLevel}%` }}>{currentExperience} xp</span>
        </div>
        <span>{experienceToNextLevel} xp</span>
    </header>
  );
}