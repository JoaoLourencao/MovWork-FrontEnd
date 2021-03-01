import { ProgressBar } from "../components/ProgressBar";
import Head from "next/head";
import { Profile } from "../components/Profile";
import styles from "../styles/pages/home.module.css";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallangeBox";
import { CountdownProvider } from "../contexts/CountdownContext";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
          <title>Início | MovWork</title>
      </Head>
      <ProgressBar/>  

      <CountdownProvider>
        <section>
          <div>
            <Profile/>
            <CompletedChallenges/>
            <Countdown/>
          </div>
          <div>
            <ChallengeBox/>
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
