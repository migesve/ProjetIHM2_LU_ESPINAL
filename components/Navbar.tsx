"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { useState } from "react";

export default function Navbar() {
  interface User {
    username: string;
  }

  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);

  const handleMouseEnter = (dropdownName: string) => {
    setHoveredDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setHoveredDropdown(null);
  };

  const setUserRole = (role: string) => {
    setUser({ username: role === "coach" ? "Coach User" : "RC User" });
    setRole(role);
  };

  const logOut = () => {
    setUser(null);
    setRole(null);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              Accueil
            </Link>
          </li>
          <li
            className={`${styles.navItem} ${styles.dropdown}`}
            onMouseEnter={() => handleMouseEnter("championnats")}
            onMouseLeave={handleMouseLeave}
          >
            <span className={styles.navLink}>Championnats</span>
            <ul
              className={`${styles.subMenu} ${
                hoveredDropdown === "championnats" ? styles.subMenuVisible : ""
              }`}
            >
              <li className={styles.navItem}>
                <Link href="/pages/calendrier" className={styles.navLink}>
                  Calendrier
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/pages/resultats" className={styles.navLink}>
                  Résultats
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/pages/classement" className={styles.navLink}>
                  Classement
                </Link>
              </li>
            </ul>
          </li>
          {role === "responsable comite" && (
            <>
              <li className={styles.navItem}>
                <Link href="/pages/organiser" className={styles.navLink}>
                  Organiser un Plateaux
                </Link>
              </li>
              <li
                className={`${styles.navItem} ${styles.dropdown}`}
                onMouseEnter={() => handleMouseEnter("gerer-championnats")}
                onMouseLeave={handleMouseLeave}
              >
                <span className={styles.navLink}>Gérer championnats</span>
                <ul
                  className={`${styles.subMenu} ${
                    hoveredDropdown === "gerer-championnats"
                      ? styles.subMenuVisible
                      : ""
                  }`}
                >
                  <li className={styles.navItem}>
                    <Link href="/pages/championnats" className={styles.navLink}>
                      Créer Championnat
                    </Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link href="/pages/cloture" className={styles.navLink}>
                      Clôture des Championnats
                    </Link>
                  </li>
                </ul>
              </li>
            </>
          )}
          {role === "coach" && (
            <li className={styles.navItem}>
              <Link href="/pages/organiser" className={styles.navLink}>
                Organiser un Plateaux
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className={styles.navRight}>
        {user ? (
          <>
            <span className={styles.userGreeting}>Bonjour, {user.username}</span>
            <button className={styles.navButton} onClick={logOut}>
              Log Out
            </button>
          </>
        ) : (
          <>
            <button
              className={styles.navButton}
              onClick={() => setUserRole("coach")}
            >
              Coach
            </button>
            <button
              className={styles.navButton}
              onClick={() => setUserRole("responsable comite")}
            >
              RC
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
