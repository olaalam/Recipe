import React, { useState, useEffect } from "react";
import styles from "./home.module.scss";
import axios from "axios";
import Loading from "../Loading.jsx";
import { useNavigate } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar.jsx"; 

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const navigate = useNavigate();

  async function getCategories() {
    try {
      setLoading(true);
      let response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
      );
      setCategories(response.data.meals);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  }

  async function getMeals(category) {
    try {
      setLoading(true);
      let url =
        category === "All"
          ? "https://www.themealdb.com/api/json/v1/1/search.php?s="
          : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

      let response = await axios.get(url);
      setMeals(response.data.meals);
    } catch (error) {
      console.error("Error fetching meals:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCategories();
    getMeals(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Learn, Cook, Eat Your Food</h1>

      {loading ? (
        <Loading />
      ) : (
        <>
          <Sidebar
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <div className={styles.content}>
            <div className={styles.row}>
              {meals?.map((meal) => (
                <div key={meal.idMeal} className={styles.card}>
                  <div className={styles.cardImage}>
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{meal.strMeal}</h3>
                    <p className={styles.cardSubtitle}>
                      {meal.strArea && (
                        <i
                          className="fa-solid fa-earth-americas"
                          style={{ color: "#21ba75" }}
                        ></i>
                      )}{" "}
                      {meal.strArea || ""}
                    </p>
                    <button
                      onClick={() => navigate(`/details/${meal.idMeal}`)}
                      className={styles.button}
                    >
                      View Recipe
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
