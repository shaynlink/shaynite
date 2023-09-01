'use client';

import { useEffect, useRef } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import styles from '@/styles/components/animations/FutureAnimation.module.scss';

const TRANSLATE = 1.4;

export default function FutureAnimation() {
    const pReference = useRef<HTMLParagraphElement>(null);
    const pAnimation1 = useRef<HTMLParagraphElement>(null);
    const pAnimation2 = useRef<HTMLParagraphElement>(null);
    const animated = useRef<boolean>(false);
    const isIntersecting = useIntersectionObserver(pReference, { threshold: 0.5 });

    useEffect(() => {
        if (isIntersecting && !animated.current) {
            animated.current = true;
            if (pAnimation1.current && pAnimation2.current) {
                pAnimation1.current.style.transform = `translateX(${TRANSLATE}vw) translateY(-${TRANSLATE}vw)`;
                pAnimation2.current.style.transform = `translateX(${TRANSLATE}vw) translateY(-${TRANSLATE}vw)`;
            }
            setTimeout(() => {
                if (pAnimation2.current) {
                    pAnimation2.current.style.transform = `translateX(${TRANSLATE * 2}vw) translateY(-${TRANSLATE * 2}vw)`;
                }
            }, 200);
        }
    }, [isIntersecting])

    return (
        <div className={styles.containerFuture}>
            <p ref={pAnimation1} className={styles.pAnime1}>future</p>
            <p ref={pAnimation2} className={styles.pAnime2}>future</p>
            <p ref={pReference}>future</p>
        </div>
    )
}