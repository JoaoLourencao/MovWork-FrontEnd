import Styles from "../styles/components/ProgressBar.module.css";

export function ProgressBar() {
  return (
    <header className={Styles.progressBar}>
        <span>0 xp</span>
        <div>
          <div style={{width: '50%'}}/>

          <span className={Styles.currentProgress} style={{ left:'50%' }}>300 xp</span>
        </div>
        <span>600 xp</span>
    </header>
  );
}