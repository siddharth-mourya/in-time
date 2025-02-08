"use client";
import moment from "moment";
import Circle from "./Circle/Circle";
import styles from "./Timer.module.scss";
import { useEffect, useState } from "react";

const Timer = () => {
  const [currentMinutes, setCurrentMinutes] = useState("");
  const [currentSeconds, setCurrentSeconds] = useState("");
  const [currentHours, setCurrentHours] = useState("");
  useEffect(() => {
    setInterval(() => {
      setCurrentHours(moment().format("HH"));
      setCurrentSeconds(moment().format("ss"));
      setCurrentMinutes(moment().format("mm"));
    }, 1000);
  }, []);

  return (
    <div className={styles.timer}>
      <Circle
        typeOfCircle="second"
        currentUnit={Number(currentSeconds)}
        noOfUnits={60}
        radius={375}
        rotateSeconds={60}
      />
      <Circle
        typeOfCircle="minute"
        currentUnit={Number(currentMinutes)}
        noOfUnits={60}
        radius={275}
        rotateSeconds={60 * 60}
      />
      <Circle
        typeOfCircle="hour"
        currentUnit={Number(currentHours)}
        noOfUnits={24}
        radius={175}
        rotateSeconds={60 * 60 * 12}
      />
      <div className={styles.currentTime}>
        <h2>{`${currentHours}:${currentMinutes}:${currentSeconds}`}</h2>
        <h2>8 Feb 2025</h2>
      </div>
    </div>
  );
};

export default Timer;
