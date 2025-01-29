import React, { useState, useEffect } from "react";
import styles from "./sidebar.module.scss";

export default function Sidebar({ categories, selectedCategory, setSelectedCategory }) {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.sidebar}>
      {isSmallScreen ? (
        <select
          className={styles.select}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          {categories.map((category, index) => (
            <option key={index} value={category.strCategory}>
              {category.strCategory}
            </option>
          ))}
        </select>
      ) : (
        <ul className={styles.ul}>
          <li
            className={`${styles.link} ${selectedCategory === "All" ? styles.active : ""}`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </li>
          {categories.map((category, index) => (
            <li
              key={index}
              className={`${styles.link} ${selectedCategory === category.strCategory ? styles.active : ""}`}
              onClick={() => setSelectedCategory(category.strCategory)}
            >
              {category.strCategory}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
