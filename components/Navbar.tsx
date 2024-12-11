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
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);

  useEffect(() => {
    setUser({ username: "Pierre" });
  }, []);

  useEffect(() => {
    if (user) {
      setRole("responsable comite");
    }
  }, [user]);

  const handleMouseEnter = (dropdownName: string) => {
    setHoveredDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setHoveredDropdown(null);
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
            onMouseEnter={() => handleMouseEnter("championnats")}
            onMouseLeave={handleMouseLeave}
          >
            <span>Championnats</span>
            <ul
              className={`${styles.subMenu} ${
                hoveredDropdown === "championnats" ? styles.subMenuVisible : ""
              }`}
            >
              <li className={styles.navItem}>
                <Link href="/pages/calendrier">Calendrier</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/pages/resultats">Résultats</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/pages/classement">Classement</Link>
              </li>
            </ul>
          </li>
          {role === "responsable comite" && (
            <>
              <li className={styles.navItem}>
                <Link href="/pages/organiser">Organiser un Plateaux</Link>
              </li>
              <li
                className={`${styles.navItem} ${styles.dropdown}`}
                onMouseEnter={() => handleMouseEnter("gerer-championnats")}
                onMouseLeave={handleMouseLeave}
              >
                <span>Gérer championnats</span>
                <ul
                  className={`${styles.subMenu} ${
                    hoveredDropdown === "gerer-championnats" ? styles.subMenuVisible : ""
                  }`}
                >
                  <li className={styles.navItem}>
                    <Link href="/pages/championnats">Créer Championnat</Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link href="/pages/cloture">Clôture des Championnats</Link>
                  </li>
                </ul>
              </li>
            </>
          )}
          {role === "coach" && (
            <li className={styles.navItem}>
              <Link href="/pages/organiser">Organiser un Plateaux</Link>
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
