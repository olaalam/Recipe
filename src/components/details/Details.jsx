import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading";
import styles from "./Details.module.scss";
import Notfound from "../Notfound";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      
      if (!/^\d+$/.test(id)) {
        navigate("/");
        return;
      }

      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );

        if (!data.meals || data.meals.length === 0) {
          navigate("/");
          return;
        }

        setRecipe(data.meals[0]);
      } catch (error) {
        console.error("Error fetching recipe:", error);
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id, navigate]);

  if (loading) {
    return <Loading />;
  }

  if (!recipe) {
    return <Notfound />;
  }

  return (
    <div className={styles.details}>
      <h2 className={styles.title}>{recipe.strMeal}</h2>
      <div className={styles.recipeBody}>
        <div className={styles.left}>
          <img className={styles.recipeImg} src={recipe.strMealThumb} alt={recipe.strMeal} />
          <div className={styles.buttons}>
            <button className={styles.youtube}>
              <a href={recipe.strYoutube} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-youtube"></i> YouTube
              </a>
            </button>
            <button className={styles.source}>
              <a href={recipe.strSource} target="_blank" rel="noreferrer">
                <i className="fa-solid fa-earth-americas"></i> Source
              </a>
            </button>
          </div>
        </div>
        <div className={styles.middle}>
          <p className={styles.strInstructions}>{recipe.strInstructions}</p>
        </div>
        <div className={styles.right}>
          <h3>Ingredients:</h3>
          <ul className={styles.ul}>
            {Array.from({ length: 20 }).map((_, index) => {
              const ingredient = recipe[`strIngredient${index + 1}`];
              const measure = recipe[`strMeasure${index + 1}`];
              return ingredient ? (
                <li key={index}>
                  <span className={styles.ingredientName}>{ingredient}</span>
                  <span className={styles.measurement}>{measure}</span>
                </li>
              ) : null;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}