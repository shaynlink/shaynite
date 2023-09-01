'use client';

import { useEffect, useRef } from 'react';
import useColoration from '@/hooks/useColoration';
import SecondOrderSystem from '@/lib/SecondOrderSystem';
import styles from '@/styles/components/animations/CursorAnimation.module.scss';

const PRIMARY_FREQUENCY = 1.6;
const PRIMARY_DUMPING_FACTOR = .7;
const PRIMARY_RESPONSE_FACTOR = -.5;

const SECONDARY_FREQUENCY = 1.6;
const SECONDARY_DUMPING_FACTOR = .7;
const SECONDARY_RESPONSE_FACTOR = 1;

export default function CursorAnimation() {
    const { color } = useColoration();
    const cursorPrimaryRef = useRef<HTMLDivElement>(null);
    const cursorSecondaryRef = useRef<HTMLDivElement>(null);
    const tp = useRef<number>(0);
    const animationFrameID = useRef<number | null>(null);
    const settings = useRef<any>({
        primaryCircle: {
          pos: new Array(2).fill(0),
          sX: new SecondOrderSystem(
            PRIMARY_FREQUENCY,
            PRIMARY_DUMPING_FACTOR,
            PRIMARY_RESPONSE_FACTOR, 0),
          sY: new SecondOrderSystem(
            PRIMARY_FREQUENCY,
            PRIMARY_DUMPING_FACTOR,
            PRIMARY_RESPONSE_FACTOR, 0),
        },
        secondaryCircle: {
          pos: new Array(2).fill(0),
          sX: new SecondOrderSystem(
            SECONDARY_FREQUENCY,
            SECONDARY_DUMPING_FACTOR,
            SECONDARY_RESPONSE_FACTOR, 0),
          sY: new SecondOrderSystem(
            SECONDARY_FREQUENCY,
            SECONDARY_DUMPING_FACTOR,
            SECONDARY_RESPONSE_FACTOR, 0)
        }
    });

    const setPosition = (element: HTMLDivElement, x: number, y: number, delta: number) => {
        element.style.left = `${x - delta}px`;
        element.style.top = `${y - delta}px`;
    }

    useEffect(() => {
        function mouseMove(event: MouseEvent) {
            const { clientX: x, clientY: y } = event;
          
            settings.current.primaryCircle.pos[0] = x;
            settings.current.primaryCircle.pos[1] = y;
            
            // late effect
            settings.current.secondaryCircle.pos[0] = x;
            settings.current.secondaryCircle.pos[1] = y;
        }

        document.addEventListener('mousemove', mouseMove);

        const update = (t: number) => {
            const dt = (t - tp.current) * 0.001; // time step (delta time)
            tp.current = t
            
            {
                if (!cursorPrimaryRef.current) return;
                const { primaryCircle: { pos, sX, sY } } = settings.current;
                sX.update(dt, pos[0]);
                sY.update(dt, pos[1]);
          
                setPosition(cursorPrimaryRef.current, sX.value, sY.value, 15); 
            }
            
            {
                if (!cursorSecondaryRef.current) return;
                const { secondaryCircle: { pos, sX, sY } } = settings.current;
                sX.update(dt, pos[0]);
                sY.update(dt, pos[1]);
          
                setPosition(cursorSecondaryRef.current, sX.value, sY.value, 2.5);  
            }
          
            animationFrameID.current = requestAnimationFrame((t) => update(t));
        }

        update(performance.now());

        return () => {
            document.removeEventListener('mousemove', mouseMove);
            cancelAnimationFrame(animationFrameID.current!);
        }
    })
    
    return (
        <>
            <div
                ref={cursorPrimaryRef}
                className={styles.cursorPrimary}
                style={{ border: `.3px solid ${color}` }}
            ></div>
            <div
                ref={cursorSecondaryRef}
                className={styles.cursorSecondary}
                style={{ backgroundColor: color }}
            ></div>
        </>
    )
}