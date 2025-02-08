import moment from "moment";
import Timer from "../Timer/Timer";
import styles from "./TimerWrapper.module.scss";

const TimerWrapper = () => {
  const time = moment().format("HH:mm:ss");
  return (
    <div className={styles.timerWrapper}>
      <Timer />
      <div className={styles.currentTime}>
        <h1>In Time</h1>
        <h2>{time}</h2>
      </div>
    </div>
  );
};

export default TimerWrapper;
