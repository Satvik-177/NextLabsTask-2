// SubFolderComponent.js
import React from "react";
import FolderComponent from "./FolderComponent";

const SubFolderComponent = ({ folder }) => {
  return (
    <div>
      <FolderComponent folder={folder} />
    </div>
  );
};

export default SubFolderComponent;
