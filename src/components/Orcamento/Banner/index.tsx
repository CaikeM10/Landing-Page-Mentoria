import styles from './styles.module.scss';

const Banner = () => {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.titleBanner}>
                    <h1>
                        Crie seu site ideal e veja seu negócio crescer online.
                    </h1>
                    <p>
                        Um site profissional, rápido e otimizado para atrair
                        mais clientes e aumentar suas vendas.
                    </p>
                </div>
            </section>
        </>
    );
};

export default Banner;
