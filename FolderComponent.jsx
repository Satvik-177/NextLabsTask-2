// FolderComponent.js
import React from "react";
import SubFolderComponent from "./SubFolderComponent";
import FileComponent from "./FileComponent";

const FolderComponent = ({ folder }) => {
  return (
    <div>
      <h3>{folder.name}</h3>
      {folder.children.map((item, index) => (
        <div key={index}>
          {item.type === "folder" ? (
            <SubFolderComponent folder={item} />
          ) : (
            <FileComponent file={item} />
          )}
        </div>
      ))}
    </div>
  );
};

export default FolderComponent;
