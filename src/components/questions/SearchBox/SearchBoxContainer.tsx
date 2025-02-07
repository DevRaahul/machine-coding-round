import { FC } from "react";
import TypeAheadComponent from "./TypeAheadComponent";

const SearchBoxContainer: FC = () => {
  const getRecipe = async (query: string) => {
    const recipeData = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
    const data = await recipeData.json();
    return data.recipes;
  };

  return (
    <div className="size-fit">
      <TypeAheadComponent
        labelText={"Recipe Search :"}
        placeHolder={"Search recipes ..."}
        loadingMsg={"Fetching results ..."}
        dataKey={"name"}
        onSelectHandler={(data) => console.log("on Select", data)}
        fetchOptions={getRecipe}
        styleClasses="p-2 w-[18rem] text-black focus:outline-none focus:ring-0 focus:border-transparent bg-blue-200"
      />
    </div>
  );
};

export default SearchBoxContainer;
