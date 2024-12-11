"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";

export default function Navbar() {
  interface User {
    username: string;
  }

  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setUser({ username: "Pierre" }); 
  }, []);

  useEffect(() => {
    if (user) {
      setRole(null); 
    }
  }, [user]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Accueil</Link>
          </li>
          <li
            className={`${styles.navItem} ${styles.dropdown}`}
            onClick={toggleDropdown}
          >
            <span>Championnats</span>
            <ul
              className={`${styles.subMenu} ${
                isDropdownOpen ? styles.subMenuVisible : ""
              }`}
            >
              <li className={styles.navItem}>
                <Link href="/pages/calendrier">Calendrier</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/pages/results">Résultats</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/pages/classement">Classement</Link>
              </li>
            </ul>
          </li>
          {role === "responsable comite" && (
            <>
              <li className={styles.navItem}>
                <Link href="/pages/organizer">Plateaux</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/pages/championnats">Créer Championnat</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/pages/cloture">Clôture des Championnats</Link>
              </li>
            </>
          )}
          {role === "coach" && (
            <li className={styles.navItem}>
              <Link href="/pages/organizer">Plateaux</Link>
            </li>
          )}
        </ul>
      </div>
      <div className={styles.navRight}>
        {user ? (
          <span className={styles.userGreeting}>Bonjour, {user.username}</span>
        ) : (
          <Link href="/pages/signup">Inscription / Connexion</Link>
        )}
      </div>
    </nav>
  );
}
