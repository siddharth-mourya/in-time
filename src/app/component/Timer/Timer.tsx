
import Circle from "./Circle/Circle";
import styles from "./Timer.module.scss";

const Timer = () => {
    return <div className={styles.timer}>
        <Circle noOfUnits={60} radius={350} />
        <Circle noOfUnits={60} radius={275} />
        <Circle noOfUnits={24} radius={200} />
{/* 
        <div className={styles.secondsCircle}>
        <Circle noOfUnits={60} radius={350} />
        </div>
        <div className={styles.minutesCircle}>
        <Circle noOfUnits={60} radius={275} />
        </div>
        <div className={styles.hourCircle}>

        <Circle noOfUnits={24} radius={200} />
        </div> */}
    </div>
}

export default Timer;