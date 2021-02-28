import { ProgressBar } from "../components/ProgressBar";
import Head from "next/head";
import { Profile } from "../components/Profile";
import styles from "../styles/pages/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <ProgressBar/>  

      <section>
        <div>
          <Profile/>
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
