'use client';

import { useEffect, useRef } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import styles from '@/styles/components/SkillBar.module.scss';

interface SkillBarProps {
    text: string;
    percent: number;
};

export default function SkillBar({ text, percent }: SkillBarProps) {
    const progessRef = useRef<HTMLDivElement>(null);
    const isIntersecting = useIntersectionObserver(progessRef, { threshold: 0.5 });

    useEffect(() => {
        if (isIntersecting) {
            setTimeout(() => {
                if (progessRef.current) {
                    progessRef.current.style.width = `${percent}%`;
                }
            }, 500);
        }
    }, [isIntersecting, percent]);
    
    return (
        <div className={styles.container}>
            <p className={styles.text}>{text}</p>
            <div className={styles.bar}>
                <div ref={progessRef} className={styles.progress}></div>
            </div>
        </div>
    )
}