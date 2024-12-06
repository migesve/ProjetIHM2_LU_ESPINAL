import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link href="/">Accueil</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/signup">Inscription</Link></li>
                <li><Link href="/championships">Créer Championnat</Link></li>
                <li><Link href="/organizer">Plateaux</Link></li>
                <li><Link href="/results">Résultats</Link></li>
                <li><Link href="/calendar">Calendrier</Link></li>
                <li><Link href="/downloads">Téléchargements</Link></li>
            </ul>
        </nav>
    );
}
