function FoodBox(props) {
  const { name, calories, image, servings } = props.food;

  const handleDelete = (indexToDelete) => {
    console.log(indexToDelete);
    const clone = JSON.parse(JSON.stringify(props.allFoodList));
    clone.splice(indexToDelete, 1);
    props.setFoodList(clone);
  };

  return (
    <div>
      <p>{name}</p>

      <img src={image} />

      <p>Calories: {calories}</p>
      <p>Servings {servings}</p>

      <p>
        <b>Total Calories: {servings * calories} </b> kcal
      </p>

      <button onClick={() => handleDelete(props.index)}>Delete</button>
    </div>
  );
}

export default FoodBox;
