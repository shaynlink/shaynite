'use client';

import useColoration from '@/hooks/useColoration';
import Link from 'next/link';
import '@/styles/components/Navbar.scss';


export default function Navbar() {
    const style = useColoration();

    return (
        <nav style={style}>
            <Link href="/"><p>Rayane Guemmoud</p></Link>

            <ul>
                <li><Link href="/works">works</Link></li>
                <li><Link href="https://www.linkedin.com/in/rayane-guemmoud">LinkedIn</Link></li>
            </ul>
        </nav>
    )
}