import explorer from "./fileExplorerData";
import FileManager from "./fileManager";

const FileManagerContainer = () => {
  
    return (
        {
            explorer.map((item) => {
                if(item.isFolder){
                    return <>
                        <div className="mt-2 ml-5">
          <span>📂 {explorer?.name}</span>
          <div>{explorer.items.map((item) => {})}</div>
        </div>
                    </>
                }
                return 
            })
        }
    )
};

export default FileManagerContainer;
