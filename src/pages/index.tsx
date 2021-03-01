import { ProgressBar } from "../components/ProgressBar";
import Head from "next/head";
import { Profile } from "../components/Profile";
import styles from "../styles/pages/home.module.css";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
          <title>Início | MovWork</title>
      </Head>
      <ProgressBar/>  

      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <Countdown/>
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
