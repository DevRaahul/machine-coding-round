import { IFileData } from "@/constant/fileExplorerData";
import { ReactNode, useState } from "react";

interface IFileExplorer {
  data: IFileData[];
  renderChildList: (items: IFileData[]) => ReactNode;
  isOpen: any;
  handleOpen: (name: string) => void;
}

const FileExplorer: React.FC<IFileExplorer> = ({ data, renderChildList, isOpen, handleOpen }) => {
  return (
    <>
      {data.map((item) => {
        if (item.isFolder) {
          return (
            <>
              <div key={item.id} className="pl-2 border-gray-600">
                <span className="hover:cursor-pointer" onClick={() => handleOpen(item.name)}>
                  {isOpen[item.name] ? "📂" : "📁"} {item.name}
                </span>
                {isOpen[item.name] && item.items.length > 0 && <div className="pl-4">{renderChildList(item.items)}</div>}
              </div>
            </>
          );
        } else {
          return (
            <>
              <div key={item.id} className="pl-2">
                <span>{`📝 ${item.name}`}</span>
              </div>
            </>
          );
        }
      })}
    </>
  );
};

export default FileExplorer;
