"use client";
import moment from "moment";
import Circle from "./Circle/Circle";
import styles from "./Timer.module.scss";
import { useEffect, useState } from "react";
import useDevice from "@/common/hooks/useDevice";

const Timer = () => {
  const { isMobile } = useDevice();
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

  const currentDate = moment().format("Do MMM YYYY");

  return (
    <div className={styles.timer}>
      <Circle
        typeOfCircle="second"
        currentUnit={Number(currentSeconds)}
        noOfUnits={60}
        radius={isMobile ? 375 : 325}
        rotateSeconds={60}
      />
      <Circle
        typeOfCircle="minute"
        currentUnit={Number(currentMinutes)}
        noOfUnits={60}
        radius={isMobile ? 275 : 225}
        rotateSeconds={60 * 60}
      />
      <Circle
        typeOfCircle="hour"
        currentUnit={Number(currentHours)}
        noOfUnits={24}
        radius={isMobile ? 175 : 125}
        rotateSeconds={60 * 60 * 12}
      />
      <div className={styles.currentTime}>
        <h2>{`${currentHours}:${currentMinutes}:${currentSeconds}`}</h2>
        <h2>{currentDate}</h2>
      </div>
    </div>
  );
};

export default Timer;
