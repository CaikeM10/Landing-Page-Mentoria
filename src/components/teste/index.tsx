import ScrollAnimation from 'react-animate-on-scroll';
import styles from './styles.module.scss';

const Teste = () => {
    return (
        <>
            <div className={styles.container}>
                <ScrollAnimation animateIn="fadeIn">
                    <h1 className={styles.teste}>TESTE</h1>
                </ScrollAnimation>
            </div>
        </>
    );
};

export default Teste;
