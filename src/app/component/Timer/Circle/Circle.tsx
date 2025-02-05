import styles from './Circle.module.scss'

interface Circle {
    noOfUnits: number;
    radius: number;
}

const Circle: React.FC<Circle> = ({noOfUnits, radius}) => {
    const circleElements = Array.from({length: noOfUnits});
    const anglePerUnit = 360/noOfUnits;
    return (
        <div className={styles.circle}>
            {circleElements.map((_, index) => 
            {
                const unitRotateDeg = anglePerUnit * index;
                return <span style={{
                    transform: `rotate(${unitRotateDeg}deg) translate(${radius}px) rotate(-${unitRotateDeg}deg)`
                }} className={styles.circleElements}>
                    {index}
                </span>
        }
    )}
        </div>
    );
};

export default Circle;