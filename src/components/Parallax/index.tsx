import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

const Parallax = () => {
    const container = useRef(null);
    const [isEnd, setIsEnd] = useState(false);
    // Adicionando um novo estado para controlar a aplicação da classe startClass.
    const [isAnimating, setIsAnimating] = useState(false);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 200]);

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((v) => {
            const progress = parseFloat(v.toFixed(2));
            // Ativa isAnimating quando o scroll começa.
            if (progress > 0 && progress < 1) {
                setIsAnimating(true);
            }
            if (progress === 1) {
                setIsEnd(true);
            } else {
                setIsEnd(false);
            }
            // Desativa isAnimating quando o scroll retorna ao início ou chega ao fim.
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
                    style={{ scale }}
                    // Aqui é onde a lógica para aplicar a classe startClass é implementada.
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
