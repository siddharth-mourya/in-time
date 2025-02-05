
import ConcentricClock from "./component/ConcentricClock/ConcentricClock";
import Timer from "./component/TimerWrapper/TimerWrapper";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <Timer />
      <ConcentricClock />
    </div>
  );
}
