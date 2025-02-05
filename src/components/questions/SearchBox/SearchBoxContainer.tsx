import { FC, useEffect } from "react";
import TypeAheadComponent from "./TypeAheadComponent";

const SearchBoxContainer: FC = () => {
  const getRecipe = async () => {
    const recipeData = await fetch("https://dummyjson.com/recipes");
    const results = await recipeData.json();
    console.log(results);
  };

  return (
    <div className="size-fit">
      <TypeAheadComponent
        placeHolder={"Search recipes ..."}
        loadingMsg={"Fetching results ..."}
        dataKey={"name"}
        onSelectHandler={() => console.log("on Select")}
        onChangeHandler={() => console.log("on Change")}
        fetchOptions={getRecipe}
        styleClasses="p-2 rounded-sm w-[18rem] border border-gray-700"
      />
    </div>
  );
};

export default SearchBoxContainer;
