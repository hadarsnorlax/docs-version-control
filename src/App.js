import React, { useState } from 'react';
import Split from 'react-split';
import Editor from './components/Editor/Editor';
import FileTree from './components/FileTree/FileTree';
import fileTreeData from './components/FileTree/data';
import './App.css';

const App = () => {
  const [fileContent, setFileContent] = useState('');

  return (
    <div className="app-container">
      <Split
        sizes={[25, 75]}
        minSize={200}
        expandToMin
        gutterSize={10}
        className="split"
        direction="horizontal"
      >
        <div className="file-tree-container">
          <FileTree
            data={fileTreeData}
            onSelect={(node) => console.log('Selected:', node)}
          />
        </div>
        <div className="editor-container">
          <Editor fileContent={fileContent} onContentChange={setFileContent} />
        </div>
      </Split>
    </div>
  );
};

export default App;
