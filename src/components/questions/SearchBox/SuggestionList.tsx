import { FC, ReactNode } from "react";

interface ISuggestionList {
  suggestionData: any[];
  onSelectHandler: (data: any) => void;
  searchText: string;
}
const SuggestionList: FC<ISuggestionList> = ({ suggestionData, onSelectHandler, searchText }) => {
  const getHighlightedText = (text: string): ReactNode => {
    const parts = text.split(new RegExp(`(${searchText})`, "gi"));

    return (
      <span>
        {parts.map((part, index) => {
          return part.toLowerCase() === searchText.toLowerCase() ? <b key={`item-${index}`}>{part}</b> : part;
        })}
      </span>
    );
  };

  return (
    <>
      {suggestionData.map((dt, idx) => {
        return (
          <li
            key={`suggestion-${idx}`}
            className={`p-2 list-none overflow-y-auto  hover:bg-blue-200 rounded-b-sm`}
            onClick={() => onSelectHandler(dt)}
          >
            {getHighlightedText(dt.name)}
          </li>
        );
      })}
    </>
  );
};

export default SuggestionList;
