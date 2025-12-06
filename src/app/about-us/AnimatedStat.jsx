import { useEffect, useRef } from "react";
import { useSpring, useMotionValue, useInView } from "framer-motion";

const AnimatedStat = ({ value, suffix }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 100, stiffness: 100 });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [motionValue, isInView, value]);

    useEffect(() =>
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = `${Intl.NumberFormat('en-US').format(latest.toFixed(0))}${suffix}`;
            }
        }), [springValue, suffix]
    );

    return <span ref={ref} />;
};

export default AnimatedStat;
