import { IFileData } from "@/constant/fileExplorerData";

interface IFileExplorer {
  data: IFileData[];
}

const FileExplorer: React.FC<IFileExplorer> = ({ data }) => {
  return <div>FileExplorer</div>;
};

export default FileExplorer;
