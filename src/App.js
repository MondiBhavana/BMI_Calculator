import React, { useState } from "react";
import FoodRecommendation from "./FoodRecommendation";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculate = (e) => {
    e.preventDefault();
    if (weight === "" || height === "") {
      alert("Please enter valid input");
    } else {
      let weightNum = parseFloat(weight);
      let heightNum = parseFloat(height);
      let bmiValue = (weightNum / (heightNum * heightNum)) * 703;
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setMessage("You are Underweight.");
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setMessage("You are a healthy person.");
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setMessage("You are Overweight.");
      } else {
        setMessage("You are Obese.");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1>BMI Calculator</h1>
        <form onSubmit={calculate}>
          <div>
            <label>Weight:</label>
            <input
              type="text"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
              }}></input>
          </div>
          <div>
            <label>Height:</label>
            <input
              type="text"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
              }}></input>
          </div>
          <div>
            <button className="btn" type="Submit">
              Submit
            </button>
            <button className="btn btn-outline" type="button" onClick={reload}>
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is {bmi}</h3>
            <p>{message}</p>
            {bmi && <FoodRecommendation bmi={bmi} />}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
