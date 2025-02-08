import TimerWrapper from "./component/TimerWrapper/TimerWrapper";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <TimerWrapper />
    </div>
  );
}
