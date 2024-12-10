import './globals.css';
import Navbar from '../components/Navbar';
import { ReactNode } from 'react';

export const metadata = {
    title: 'Championship Manager',
    description: 'A site to manage sports championships.',
};

type RootLayoutProps = {
    children: ReactNode; 
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="fr">
            <body>
                <Navbar />
                <main style={{ marginTop: '60px' }}>{children}</main> 
            </body>
        </html>
    );
}

