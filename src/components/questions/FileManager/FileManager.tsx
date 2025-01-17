import { IFileData } from "./fileExplorerData";

interface IFileManager {
  data: IFileData[];
}

const FileManager: React.FC<IFileManager> = ({ data }) => {
  return (
    <>
      {data.map((item: IFileData) => {
        if (item.isFolder) {
          return (
            <>
              <div id={item.id} className="mt-2 ml-5">
                <span>📁 {item.name}</span>
                <FileManager data={item.items} />
              </div>
            </>
          );
        } else {
          return (
            <>
              <div id={item.id} className="mt-2 ml-5">
                <span>📝 {item.name}</span>
              </div>
            </>
          );
        }
      })}
    </>
  );
};

export default FileManager;
