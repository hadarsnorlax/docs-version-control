import React, { useState } from 'react';
import Editor from './components/Editor/Editor';
import FileTree from './components/FileTree/FileTree';
import fileTreeData from './components/FileTree/data';
import './App.css';

const App = () => {
  const [fileContent, setFileContent] = useState('');

  return (
    <div className="app-container">
      <FileTree
        data={fileTreeData}
        onSelect={(node) => console.log('Selected:', node)}
      />
      <div className="editor-container">
        <Editor fileContent={fileContent} onContentChange={setFileContent} />
      </div>
    </div>
  );
};

export default App;
