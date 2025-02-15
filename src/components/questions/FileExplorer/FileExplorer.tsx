import { IFileData } from "@/constant/fileExplorerData";
import { useState } from "react";

interface IFileExplorer {
  data: IFileData[];
}

const FileExplorer: React.FC<IFileExplorer> = ({ data }) => {
  const [files, setFiles] = useState<IFileData[]>(data);
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const renameHandler = (id: string, data: IFileData[]): void => {
    const copyData = [...data];
    copyData.forEach((item) => {
      if (item.id !== id && item.isFolder) {
        renameHandler(id, item.items);
      } else if (item.id === id) {
        item.name = "changed name";
      }
    });
    setFiles(copyData);
  };
  return (
    <>
      {files.map((item) => {
        if (item.isFolder) {
          return (
            <>
              <div key={item.id} className="border-l-2 px-1 border-gray-600">
                <span contentEditable={true}>{`📁 ${item.name}`}</span>
                <span className="px-2" onClick={() => renameHandler(item.id, files)}>
                  ✏️
                </span>
                <span>❌</span>
                <div className="pl-4">
                  <FileExplorer data={item.items} />
                </div>
              </div>
            </>
          );
        } else {
          return (
            <>
              <div key={item.id} className="pl-2">
                <span>{`📝 ${item.name}`}</span>
                <span className="px-2">✏️</span>
                <span>❌</span>
              </div>
            </>
          );
        }
      })}
    </>
  );
};

export default FileExplorer;
