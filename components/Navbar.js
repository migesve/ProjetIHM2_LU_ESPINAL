import Link from "next/link";
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}><Link href="/">Accueil</Link></li>
                <li className={styles.navItem}><Link href="/blog">Blog</Link></li>
                <li className={styles.navItem}><Link href="/pages/signup">Inscription</Link></li>
                <li className={styles.navItem}><Link href="/pages/championnats">Créer Championnat</Link></li>
                <li className={styles.navItem}><Link href="/pages/organizer">Plateaux</Link></li>
                <li className={styles.navItem}><Link href="/pages/results">Résultats</Link></li>
                <li className={styles.navItem}><Link href="/pages/calendrier">Calendrier</Link></li>
                <li className={styles.navItem}><Link href="/pages/downloads">Téléchargements</Link></li>
            </ul>
        </nav>
    );
}
