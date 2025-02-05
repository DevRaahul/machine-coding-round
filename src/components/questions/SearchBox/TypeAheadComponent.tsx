import { IRecipe } from "@/constant/interface";
import { FC, useState } from "react";

interface ITypeAhead {
  placeHolder: string;
  loadingMsg: string;
  dataKey: string;
  onSelectHandler: () => void;
  onChangeHandler: () => void;
  fetchOptions: () => void;
  styleClasses: string;
}

const TypeAheadComponent: FC<ITypeAhead> = (props) => {
  const { placeHolder, styleClasses } = props;
  const [data, setData] = useState<IRecipe[] | []>([]);

  return (
    <>
      <input type="text" className={styleClasses} placeholder={placeHolder} />
    </>
  );
};

export default TypeAheadComponent;
