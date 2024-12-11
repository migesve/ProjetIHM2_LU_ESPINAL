"use client";

import React from "react";

export default function HomePage() {
  return (
    <section className="home-container">
      <div className="home-content">
        <h1 className="home-title">Bienvenue sur notre site</h1>
        <p className="home-description">
          Gérez vos championnats et événements sportifs avec facilité.
        </p>
        <button className="home-button">
          <a href="/pages/classement">Explorer les Championnats</a>
        </button>
      </div>
    </section>
  );
}
