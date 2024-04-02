import Guarantee from '@/components/Guarantee';
import Header from '@/components/Header';
import MovingBars from '@/components/MovingBars';
import Parallax from '@/components/Parallax';
import SectionOne from '@/components/SectionOne';
import SectionTwo from '@/components/SectionTwo';
import Students from '@/components/Swiper';
import Teste from '@/components/teste';
import { useState } from 'react';

export default function Home() {
    const [hasScrolledToEnd, setHasScrolledToEnd] = useState(false);
    const [canScrollUpPastHorizontalPage, setCanScrollUpPastHorizontalPage] =
        useState(true);

    const handleScrollToEnd = () => {
        setHasScrolledToEnd(true);
        setCanScrollUpPastHorizontalPage(false);
    };

    const handleScrollToStart = () => {
        setHasScrolledToEnd(false);
        setCanScrollUpPastHorizontalPage(true);
    };

    return (
        <>
            <Header />
            <SectionOne />
            <SectionTwo />
            <MovingBars />
            <Guarantee />
            <Students />
            <Parallax />
            <Teste />
        </>
    );
}
