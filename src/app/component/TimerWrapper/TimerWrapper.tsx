import moment from "moment";
import Timer from "../Timer/Timer";
import styles from "./TimerWrapper.module.scss";

const TimerWrapper = () => {
  const time = moment().format("HH:mm:ss");
  return (
    <div className={styles.timerWrapper}>
      {/* Let side blur vertical column */}
      <div className={styles.leftSideBlur}></div>
      <Timer />
    </div>
  );
};

export default TimerWrapper;
