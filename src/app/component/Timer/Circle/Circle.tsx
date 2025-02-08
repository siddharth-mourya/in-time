import styles from "./Circle.module.scss";
import { CSSProperties } from "react";

interface Circle {
  noOfUnits: number;
  radius: number;
  rotateSeconds: number;
  typeOfCircle: "hour" | "minute" | "second";
  currentUnit: number;
}

const Circle: React.FC<Circle> = ({
  noOfUnits,
  radius,
  rotateSeconds,
  typeOfCircle,
  currentUnit,
}) => {
  const circleElements = Array.from({ length: noOfUnits });
  const anglePerUnit = 360 / noOfUnits;

  let initialRotation = 0;
  initialRotation = initialRotation + Number(currentUnit) * anglePerUnit;

  // specific to seconds circle  have to add anglePerUnit/2 so that it looks good on ui...
  // and colors and things get applied when element is in center of that angle
  if (typeOfCircle === "second") {
    initialRotation += anglePerUnit / 2;
  }

  return (
    <div
      style={
        {
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          animationDuration: `${rotateSeconds}s`,
          animationDelay: "3s",
          "--initial-rotate": `-${initialRotation}deg`,
        } as CSSProperties
      }
      className={styles.circle}
    >
      {circleElements.map((_, index) => {
        const unitRotateDeg = anglePerUnit * index;
        console.log(typeOfCircle, "index", index, "currentUnits", currentUnit);
        return (
          <span
            style={{
              transform: `rotate(${unitRotateDeg}deg) translate(${radius}px) rotate(-${unitRotateDeg}deg)`,
            }}
            className={`${styles.circleElementsWrapper} ${
              index == currentUnit ? styles.activeElement : ""
            }`}
          >
            <span
              style={{
                position: "absolute",
                transform: `rotate(${unitRotateDeg}deg)`,
              }}
              className={styles.circleElements}
            >
              {index}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default Circle;
