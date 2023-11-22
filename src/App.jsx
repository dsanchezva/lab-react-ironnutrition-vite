import "./App.css";
import { useState } from "react";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox.jsx";
import AddFoodForm from "./components/AddFoodForm.jsx";
import FoodList from "./components/FoodList.jsx";

function App() {
  const [allFoodList, setFoodList] = useState(foodsJson);

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <br />

      <AddFoodForm allFoodList={allFoodList} setFoodList={setFoodList} />

      <br />
      <FoodList allFoodList={allFoodList} setFoodList={setFoodList} />
    </div>
  );
}

export default App;
