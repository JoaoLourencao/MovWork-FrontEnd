import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox () {
    return(
        <div className={styles.challengeBoxContainer}>
            <span>Desafios Completos</span>
            <span>5</span>
        </div>
    );
}