import { motion, useViewportScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from './styles.module.scss';

const Teste = () => {
    const { scrollYProgress } = useViewportScroll();
    const [isSpecificPointReached, setIsSpecificPointReached] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            const progress = scrollYProgress.get();

            if (progress >= 0.99) {
                setIsSpecificPointReached(true);
            } else {
                setIsSpecificPointReached(false);
            }
        };

        const unsubscribe = scrollYProgress.onChange(checkScroll);

        return () => unsubscribe();
    }, [scrollYProgress]);

    const backgroundColor = isSpecificPointReached ? '#010425' : 'white';
    const color = isSpecificPointReached ? 'white' : 'black';

    return (
        <motion.div className={styles.container} style={{ backgroundColor }}>
            <ScrollAnimation animateIn="fadeIn">
                <h1 className={styles.teste} style={{ color }}>
                    TESTE
                </h1>
            </ScrollAnimation>
        </motion.div>
    );
};

export default Teste;
