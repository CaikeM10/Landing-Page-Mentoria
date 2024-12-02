import Banner from '@/components/Orcamento/Banner';
import Footer from '@/components/Orcamento/Footer';
import styles from '@/styles/orcamento.module.scss';

export default function Desafio() {
    return (
        <section className={styles.container}>
            <Banner></Banner>
            <Footer></Footer>
        </section>
    );
}
