import { FC } from "react";
import explorer from "./fileExplorerData";
import FileManager from "./FileManager";

const FileManagerContainer: FC = () => {
  return <FileManager data={explorer} />;
};

export default FileManagerContainer;
