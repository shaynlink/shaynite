import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const getStyle = (pathname: string) => {
    const style = { color: '', backgroundColor: '' };

    switch (pathname) {
        case '/works':
            style.color = '#fff';
            style.backgroundColor = '#282828';
            break;
        default:
            style.color = '#000';
            style.backgroundColor = '#fff';
            break;
    }

    return style;
}

export default function useColoration() {
    const pathname = usePathname();
    const [style, setStyle] = useState({ color: '', backgroundColor: '' });
    
    useEffect(() => {
        setStyle(getStyle(pathname));
    }, [pathname]);

    return style;
} 