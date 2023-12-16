// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FolderComponent from './FolderComponent';
import FileComponent from './FileComponent';
import MainComponent from './MainComponent';
import SubFolderComponent from './SubFolderComponent';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={FolderComponent} />
        <Route path="/file/:FileComponent" exact component={FileComponent} />
        <Route path="/main/:MainComponent" exact component={MainComponent} />
        <Route path="/subfolder/:SubFolderComponent" exact component={SubFolderComponent} />
      </Switch>
    </Router>
  );
};

export default App;
