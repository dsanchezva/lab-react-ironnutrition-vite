import FoodBox from "./FoodBox";

function FoodList(props) {
  return (
    <div>
      {props.allFoodList.map((eachFood, index) => {
        return (
          <FoodBox
            key={index}
            food={eachFood}
            index={index}
            allFoodList={props.allFoodList}
            setFoodList={props.setFoodList}
          />
        );
      })}
    </div>
  );
}

export default FoodList;
