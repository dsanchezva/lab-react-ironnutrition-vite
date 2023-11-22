import { useState } from "react";

// Your code here
function AddFoodForm(props) {
  const [nameValue, setNameValue] = useState("");
  const [imageValue, setImageValue] = useState("");
  const [caloriesValue, setCaloriesValue] = useState(0);
  const [servingsValue, setServingsValue] = useState(0);

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };
  const handleImageChange = (event) => {
    setImageValue(event.target.value);
  };
  const handlCaloriesChange = (event) => {
    setCaloriesValue(event.target.value);
  };
  const handleServingsChange = (event) => {
    setServingsValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFood = {
      name: nameValue,
      image: imageValue,
      calories: caloriesValue,
      servings: servingsValue,
    };
    const clone = JSON.parse(JSON.stringify(props.allFoodList));
    clone.unshift(newFood);
    props.setFoodList(clone);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        onChange={handleNameChange}
        value={nameValue}
      />
      <br />
      <label htmlFor="image">Image</label>
      <input
        type="text"
        name="image"
        onChange={handleImageChange}
        value={imageValue}
      />
      <br />
      <label htmlFor="calories">Calories</label>
      <input
        type="number"
        name="calories"
        onChange={handlCaloriesChange}
        value={caloriesValue}
      />
      <br />
      <label htmlFor="servings">Servings</label>
      <input
        type="number"
        name="servings"
        onChange={handleServingsChange}
        value={servingsValue}
      />
      <br />
      <button>Create</button>
    </form>
  );
}

export default AddFoodForm;
