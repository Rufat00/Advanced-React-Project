import { useState, useLayoutEffect, MouseEvent } from "react";
import styles from "./Ripple.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

const useDebouncedRippleCleanUp = (
    rippleCount: number,
    duration: number,
    cleanUpFunction: () => void
) => {
    useLayoutEffect(() => {
        let bounce: NodeJS.Timeout | null = null;
        if (rippleCount > 0) {
            clearTimeout(bounce);

            bounce = setTimeout(() => {
                cleanUpFunction();
                clearTimeout(bounce);
            }, duration * 4);
        }

        return () => clearTimeout(bounce);
    }, [rippleCount, duration, cleanUpFunction]);
};

interface RippleProps {
    className?: string;
    duration?: number;
}

const Ripple = ({ className, duration = 850 }: RippleProps) => {
    const [rippleArray, setRippleArray] = useState([]);

    useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
        setRippleArray([]);
    });

    const addRipple = (event: MouseEvent<HTMLDivElement>) => {
        const rippleContainer = event.currentTarget.getBoundingClientRect();
        const size =
            rippleContainer.width > rippleContainer.height
                ? rippleContainer.width
                : rippleContainer.height;
        const x = event.pageX - rippleContainer.x - size / 2;
        const y = event.pageY - rippleContainer.y - size / 2;
        const newRipple = {
            x,
            y,
            size,
        };

        setRippleArray([...rippleArray, newRipple]);
    };

    return (
        <div className={classNames(styles.ripple, className)} onMouseDown={addRipple}>
            {rippleArray.length > 0 &&
                rippleArray.map((ripple, index) => (
                    <span
                        key={`span${index}`}
                        style={{
                            top: ripple.y,
                            left: ripple.x,
                            width: ripple.size,
                            height: ripple.size,
                            animationDuration: `${duration}ms`,
                        }}
                    />
                ))}
        </div>
    );
};

export default Ripple;
