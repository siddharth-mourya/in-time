"use client";
import { useEffect, useState } from "react";
import styles from "./Clock.module.scss";

export default function ConcentricClock() {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime({
        hours: now.getHours() % 12, // 12-hour format
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.clock}>
        <Circle timeUnit={time.seconds} totalUnits={60} radius={140} size={10} activeColor="red" />
        <Circle timeUnit={time.minutes} totalUnits={60} radius={100} size={14} activeColor="blue" />
        <Circle timeUnit={time.hours} totalUnits={12} radius={60} size={16} activeColor="yellow" />
      </div>
    </div>
  );
}

type CircleProps = {
  timeUnit: number;
  totalUnits: number;
  radius: number;
  size: number;
  activeColor: string;
};

function Circle({ timeUnit, totalUnits, radius, size, activeColor }: CircleProps) {
  const angleStep = 360 / totalUnits;

  return (
    <div className={styles.circle}>
      {Array.from({ length: totalUnits }).map((_, index) => {
        const angle = index * angleStep;
        const isActive = index === timeUnit;

        return (
          <span
            key={index}
            className={styles.number}
            style={{
              transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
              fontSize: `${size}px`,
              color: isActive ? activeColor : "gray",
              fontWeight: isActive ? "bold" : "normal",
            }}
          >
            {index}
          </span>
        );
      })}
    </div>
  );
}
