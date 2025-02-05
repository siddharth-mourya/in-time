import Timer from "../Timer/Timer";
import styles from "./TimerWrapper.module.scss";

const TimerWrapper = () => {
    return <div className={styles.timerWrapper}>
        <Timer />
    </div>
}

export default TimerWrapper;