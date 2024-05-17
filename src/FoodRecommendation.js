import React from "react";
import nutsImage from "./images/nuts.jpg";
import dairyImage from "./images/dairy.jpg";
import proteinShakesImage from "./images/proteinshakes.jpg";
import fruitsVeggiesImage from "./images/fruitsvegetables.jpg";
import wholeGrainsImage from "./images/grains.jpg";
import leanProteinsImage from "./images/protein.jpg";
import leafyGreensImage from "./images/leafy.jpg";
import lowCalorieSnacksImage from "./images/low.jpg";
import vegetablesImage from "./images/veg.jpg";
import fruitsImage from "./images/fruits.jpg";

function FoodRecommendation({ bmi }) {
  let recommendation = {
    message: "",
    foods: [],
    precautions: "",
  };

  if (bmi < 18.5) {
    recommendation.message =
      "You are Underweight. You should eat foods with enough energy to help you gain weight, protein to repair your body, and build muscle.";
    recommendation.foods = [
      { name: "Nuts and Seeds", img: nutsImage },
      { name: "Dairy Products", img: dairyImage },
      { name: "Protein Shakes", img: proteinShakesImage },
    ];
    recommendation.precautions =
      "Make sure to eat regular meals, include plenty of protein and healthy fats.";
  } else if (bmi >= 18.5 && bmi < 25) {
    recommendation.message = "You are a healthy person.";
    recommendation.foods = [
      { name: "Fruits and Vegetables", img: fruitsVeggiesImage },
      { name: "Whole Grains", img: wholeGrainsImage },
      { name: "Lean Proteins", img: leanProteinsImage },
    ];
    recommendation.precautions =
      "Maintain a balanced diet and regular exercise.";
  } else if (bmi >= 25 && bmi < 30) {
    recommendation.message =
      "You are Overweight. You should eat a healthy, reduced-calorie diet and exercise regularly.";
    recommendation.foods = [
      { name: "Leafy Greens", img: leafyGreensImage },
      { name: "Low-Calorie Snacks", img: lowCalorieSnacksImage },
      { name: "Lean Proteins", img: leanProteinsImage },
    ];
    recommendation.precautions =
      "Avoid sugary drinks, high-calorie snacks, and incorporate regular physical activity.";
  } else {
    recommendation.message =
      "You are Obese. You should eat a healthy diet, engage in regular physical activity, and reduce sedentary activities.";
    recommendation.foods = [
      { name: "Vegetables", img: vegetablesImage },
      { name: "Fruits", img: fruitsImage },
      { name: "Whole Grains", img: wholeGrainsImage },
    ];
    recommendation.precautions =
      "Consult with a healthcare provider for a tailored plan, avoid processed foods, and increase physical activity.";
  }

  return (
    <div className="food-recommendation">
      <h3>{recommendation.message}</h3>
      <div className="img-container">
        {recommendation.foods.map((food, index) => (
          <div key={index}>
            <img src={food.img} alt={food.name} />
            <p>{food.name}</p>
          </div>
        ))}
      </div>
      <p>{recommendation.precautions}</p>
    </div>
  );
}
export default FoodRecommendation;
