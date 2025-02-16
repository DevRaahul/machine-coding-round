import { ReactElement, ReactNode, useState } from "react";
import FileExplorer from "./FileExplorer";
import explorer, { IFileData } from "../../../constant/fileExplorerData";

const FileExplorerContainer = () => {
  const [isOpen, setIsOpen] = useState<any>({});
  const [files, setFiles] = useState<IFileData[]>(explorer);

  const handleOpen = (key: string) => {
    setIsOpen((prev: any) => {
      return {
        ...prev,
        [key]: !isOpen[key],
      };
    });
  };

  const addFiles = (id: string) => {};

  const deleteNode = (id: string) => {
    const copyData = [...files];
    let data: IFileData[];

    const filterChild = (copyData: IFileData[]): IFileData[] => {
      const firstFilter = copyData.filter((dt) => dt.id !== id);
      data = firstFilter.map((dt: IFileData) => {
        if (dt.items.length > 0) {
          return { ...dt, items: filterChild(dt.items) };
        }
        return dt;
      });
      return data;
    };

    setFiles(filterChild(copyData));
  };

  const renameNode = (id: string): void => {
    const name: string = prompt("Enter name ...") ?? "";
    const copyData = [...files];

    const checkChild = (copyData: IFileData[]) => {
      copyData.forEach((item) => {
        if (item.id === id) {
          item.name = name;
        }
        if (item.items.length > 0) {
          checkChild(item.items);
        }
      });
    };
    checkChild(copyData);
    setFiles(copyData);
  };

  const getOptions = (item: IFileData): ReactElement => {
    return (
      <>
        <span className="hover:cursor-pointer">
          <span className="pl-2" onClick={(e) => renameNode(item.id)}>
            ✏️
          </span>
          <span className="px-2" onClick={() => deleteNode(item.id)}>
            ❌
          </span>
          {item.isFolder && <span onClick={() => addFiles(item.id)}>＋</span>}
        </span>
      </>
    );
  };

  const renderChildList = (data: IFileData[]): ReactNode => {
    return data.map((item) => {
      if (item.isFolder) {
        return (
          <div key={item.id} className="border-l-2 pl-2 border-gray-600">
            <span className="hover:cursor-pointer pr-3" onClick={() => handleOpen(item.name)}>
              {isOpen[item.name] ? "📂" : "📁"}
            </span>
            {item.name}
            {getOptions(item)}
            {isOpen[item.name] && item.items.length > 0 && <div className="pl-4">{renderChildList(item.items)}</div>}
          </div>
        );
      } else {
        return (
          <div key={item.id} className="pl-3">
            <span>{`📝 ${item.name}`}</span>
            {getOptions(item)}
          </div>
        );
      }
    });
  };

  return <FileExplorer data={files} renderChildList={renderChildList} isOpen={isOpen} handleOpen={handleOpen} />;
};

export default FileExplorerContainer;
