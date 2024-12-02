import About from '@/components/Budget/About';
import Banner from '@/components/Budget/Banner';
import Footer from '@/components/Budget/Footer';
import styles from '@/styles/orcamento.module.scss';

export default function Desafio() {
    return (
        <section className={styles.container}>
            <Banner></Banner>
            <About></About>
            <Footer></Footer>
        </section>
    );
}
