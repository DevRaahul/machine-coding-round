import { ReactElement, ReactNode, useState } from "react";
import FileExplorer from "./FileExplorer";
import explorer, { IFileData } from "../../../constant/fileExplorerData";
import { Button } from "@/components/ui/button";
import { FilePlus, FolderPlus, SquarePen, SquarePlus, Trash2 } from "lucide-react";

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

  const addFiles = (id: string, isFolder: boolean): void => {
    const name = prompt("Enter Name ...") ?? "";
    if (name === "") return;

    const copyData: IFileData[] = [...files];
    let updatedTree: IFileData[];

    const node: IFileData = {
      name,
      id: new Date().getTime().toString(),
      isFolder,
      items: [],
    };

    const updateData = (list: IFileData[]): IFileData[] => {
      updatedTree = list.map((dt) => {
        if (dt.id === id) {
          return {
            ...dt,
            items: [...dt.items, node],
          };
        }
        if (dt.items.length >= 0) {
          return {
            ...dt,
            items: updateData(dt.items),
          };
        }
        return dt;
      });
      return updatedTree;
    };
    setFiles(updateData(copyData));
  };

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
    if (name === "") return;
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
        <Button className="no-underline m-0 py-0 pl-4 pr-2 " variant="link" onClick={() => renameNode(item.id)}>
          <SquarePen />
        </Button>
        <Button className="no-underline m-0 py-0 pl-0 pr-2" variant="link" onClick={() => deleteNode(item.id)}>
          <Trash2 />
        </Button>
        {item.isFolder && (
          <>
            <Button className="no-underline m-0 py-0 pl-0 pr-2" variant="link" onClick={() => addFiles(item.id, true)}>
              <FolderPlus />
            </Button>
            <Button className="no-underline m-0 py-0 px-0   " variant="link" onClick={() => addFiles(item.id, false)}>
              <FilePlus />
            </Button>
          </>
        )}
      </>
    );
  };

  const renderChildList = (data: IFileData[]): ReactNode => {
    return data.map((item) => {
      if (item.isFolder) {
        return (
          <div key={item.id} className="pl-3 border-gray-600">
            <span className="hover:cursor-pointer pr-2" onClick={() => handleOpen(item.name)}>
              {isOpen[item.name] ? "📂" : "📁"}
            </span>
            {item.name}
            {getOptions(item)}
            {isOpen[item.name] && item.items.length > 0 && <>{renderChildList(item.items)}</>}
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
