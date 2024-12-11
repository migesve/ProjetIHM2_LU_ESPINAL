import './globals.css';
import Navbar from '../components/Navbar';
import { ReactNode } from 'react'; // Import ReactNode for type definition

export const metadata = {
    title: 'Championship Manager',
    description: 'A site to manage sports championships.',
};

type RootLayoutProps = {
    children: ReactNode; // Define the type of the children prop
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="fr">
            <body>
                <Navbar />
                <main>{children}</main> {/* Adjust the margin as needed */}
            </body>
        </html>
    );
}

