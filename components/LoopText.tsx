'use client';
import { useRef, useEffect } from 'react';
import styles from '@/styles/components/LoopText.module.scss';

interface LetterSpacingProps {
    text: string;
    repeat: number;
};

export default function LoopText({ text, repeat }: LetterSpacingProps) {
    const loopRef = useRef<HTMLDivElement>(null);
    const loopTranslate = useRef<number>(0);
    const fistTextPositionRef = useRef<number>(0);
    const process = useRef<boolean>(false);

    const listOfText = new Array(repeat)
        .fill(text)

    useEffect(() => {
        const loop = loopRef.current;
        if (!loop) return;

        const loopTexts = loop.querySelectorAll('p');
        if (loopTexts.length == 0) return;

        loopTexts.forEach((loopText) => {
            loopText.style.translate = 'none';
            loopText.style.rotate = 'none';
            loopText.style.scale = 'none';
        });

        const { left: leftPositionOfFirstElement } = loopTexts[0].getBoundingClientRect();

        fistTextPositionRef.current = leftPositionOfFirstElement;

        const animate = () => {
            loopTranslate.current += .2;

            const { left: leftPositionOfSecondElement } = loopTexts[1].getBoundingClientRect();

            if (leftPositionOfSecondElement < fistTextPositionRef.current) {
                loopTranslate.current = 0;
            }

            for (let i = 0; i < loopTexts.length; i++) {
                const loopText = loopTexts[i];
                loopText.style.transform = `translate(-${loopTranslate.current}%, 0%) translate3d(0px, 0px, 0px)`;
            }

            new Promise((res) => setTimeout(() => res(animate()), 10));
        }

        if (process.current) return;
        animate();
        process.current = true;
    }, [loopRef]);

    return (
        <div ref={loopRef} className={styles.loopText}>
            {listOfText.map((t, index) => <p key={index}>{t}</p>)}
        </div>
    )
}