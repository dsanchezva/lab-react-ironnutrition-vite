function FoodBox(props) {
  const { name, calories, image, servings } = props.food;

  return (
    <>
      <p>{name}</p>

      <img src={image} alt="food-picture" />

      <p>Calories: {calories}</p>
      <p>Servings {servings}</p>

      <p>
        <b>Total Calories: {servings * calories} </b> kcal
      </p>
    </>
  );
}

export default FoodBox;
