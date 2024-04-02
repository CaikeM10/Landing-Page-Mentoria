import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

const Parallax = () => {
    const container = useRef(null);
    const [isEnd, setIsEnd] = useState(false); // State to track if scroll is at the end

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 200]);

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((v) => {
            const progress = parseFloat(v.toFixed(2));
            if (progress === 1) {
                setIsEnd(true); // Update state when scroll reaches the end
            } else {
                setIsEnd(false); // Reset state if not at the end
            }
        });

        return () => unsubscribe();
    }, [scrollYProgress]);

    // Define animation for background transition
    const containerBackgroundAnimation = {
        backgroundColor: isEnd ? '#fff' : 'initial',
    };

    return (
        <motion.div // Use motion.div for the outer container to apply the animation
            ref={container}
            className={`${styles.container} ${
                isEnd ? styles.endContainer : ''
            }`}
            animate={containerBackgroundAnimation} // Apply the background animation based on isEnd state
        >
            <div className={styles.sticky}>
                <motion.div
                    style={{ scale }}
                    className={`${styles.el} ${isEnd ? styles.endClass : ''}`}
                >
                    <div className={styles.imageContainer}>
                        <p>O QUE VOCE IRA APRENDER</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Parallax;
