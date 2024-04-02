import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

const Parallax = () => {
    const container = useRef(null);
    const [isEnd, setIsEnd] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    // A escala ainda é transformada de [0, 1] para [1, 150]
    const scale = useTransform(scrollYProgress, [0, 1], [1, 250]);

    // A rotação é transformada de [0, 1] para [0, 360] para uma rotação completa
    // ou outro valor dependendo de quanto você quer que gire
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((v) => {
            const progress = parseFloat(v.toFixed(2));
            if (progress > 0 && progress < 1) {
                setIsAnimating(true);
            }
            if (progress === 1) {
                setIsEnd(true);
            } else {
                setIsEnd(false);
            }
            if (progress === 0 || progress === 1) {
                setIsAnimating(false);
            }
        });

        return () => unsubscribe();
    }, [scrollYProgress]);

    const containerBackgroundAnimation = {
        backgroundColor: isEnd ? '#fff' : 'initial',
    };

    return (
        <motion.div
            ref={container}
            className={`${styles.container} ${
                isEnd ? styles.endContainer : ''
            }`}
            animate={containerBackgroundAnimation}
        >
            <div className={styles.sticky}>
                <motion.div
                    // Aplica tanto a escala quanto a rotação ao mesmo tempo
                    style={{ scale, rotate }}
                    className={`${styles.el} ${
                        isAnimating ? styles.startClass : ''
                    } ${isEnd ? styles.endClass : ''}`}
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
