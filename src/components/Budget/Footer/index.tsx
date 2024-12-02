import styles from './styles.module.scss';

const Footer = () => {
    return (
        <>
            <section className={styles.container}>
                <h5>
                    Pronto para <span>impulsionar seu negócio </span>online{' '}
                </h5>
                <p>
                    Entre em contato agora e descubra como podemos transformar
                    sua presença digital em resultados reais.
                </p>
                <button className={styles.button}>
                    FAZER ORÇAMENTO GRATUITO
                </button>
                <hr />
                <div className={styles.rights}>
                    <span>Todos os direitos reservados</span>
                </div>
            </section>
        </>
    );
};

export default Footer;
