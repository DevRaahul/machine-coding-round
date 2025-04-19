import React, { FC, useEffect, useRef, useState } from "react";
import SuggestionList from "./SuggestionList";

interface ITypeAhead {
  placeHolder: string;
  loadingMsg: string;
  dataKey: string;
  onSelectHandler: (data: any) => void;
  fetchOptions: (query: string) => any;
  styleClasses: string;
  labelText: string;
}

const TypeAheadComponent: FC<ITypeAhead> = (props) => {
  const { placeHolder, styleClasses, labelText, onSelectHandler, fetchOptions, loadingMsg } = props;

  const [data, setData] = useState<any[] | []>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [selectValue, setSelectedValue] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const timerRef = useRef<any>(null);

  const onChangeFunction = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setInputValue(value);
    setSelectedValue(value);
  };

  const onSelectFunction = (data: any): void => {
    console.log("selected", data);
    setSelectedValue(data.name);
    setData([]);
    onSelectHandler(data);
  };

  const getDataForSuggestions = async () => {
    console.log("1", inputValue);
    try {
      setLoading(true);
      let results = await fetchOptions(inputValue);
      setData(results);
      setLoading(false);
      setError(false);
    } catch (e) {
      setError(true);
      setData([]);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const getDebouncedFun = (fn: () => void, time: number) => {
    return function () {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        fn();
      }, time);
    };
  };

  const debouncedDataFetch = getDebouncedFun(getDataForSuggestions, 300);

  useEffect(() => {
    if (inputValue?.length > 0) {
      debouncedDataFetch();
    } else {
      setData([]);
    }
  }, [inputValue]);

  return (
    <div className="relative">
      <label htmlFor="searchBox">
        <h5>{labelText}</h5>
      </label>
      <br />
      <input
        name="searchBox"
        type="text"
        autoComplete="off"
        className={styleClasses}
        value={selectValue}
        placeholder={placeHolder}
        onChange={onChangeFunction}
      />
      <ul className={`w-full rounded-b-md bg-slate-200 shadow-md text-black`}>
        {loading && <li className="p-2 list-none">{loadingMsg}</li>}
        {error && <li className="p-2 list-none">{"No results found"}</li>}
        {data?.length > 0 && <SuggestionList suggestionData={data} onSelectHandler={onSelectFunction} searchText={inputValue} />}
      </ul>
    </div>
  );
};

export default TypeAheadComponent;
