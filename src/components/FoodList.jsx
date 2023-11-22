import FoodBox from "./FoodBox";

function FoodList(props) {
  const handleDelete = (indexToDelete) => {
    console.log(indexToDelete);
    const clone = JSON.parse(JSON.stringify(props.allFoodList));
    clone.splice(indexToDelete, 1);
    props.setFoodList(clone);
  };

  return (
    <div>
      {props.allFoodList.map((eachFood, index) => {
        return (
          <div>
            <FoodBox key={index} food={eachFood} />
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default FoodList;
