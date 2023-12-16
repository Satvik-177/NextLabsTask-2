// MainComponent.js
import React from "react";
import FolderComponent from "./FolderComponent";

const MainComponent = ({ data }) => {
  return (
    <div>
      {data.map((folder, index) => (
        <FolderComponent key={index} folder={folder} />
      ))}
    </div>
  );
};

export default MainComponent;
