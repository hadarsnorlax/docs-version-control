import React, { useState } from 'react';
import Editor from './components/Editor/Editor';
import FileTree from './components/FileTree/FileTree';
import fileTreeData from './components/FileTree/data';

const App = () => {
  const [content, setContent] = useState('');
  const [savedContent, setSavedContent] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Docs Version Control</h1>
      </header>
      <main>
        <FileTree
          data={fileTreeData}
          onSelect={(node) => console.log('Selected:', node)}
        />
        <Editor
          fileContent={content}
          onContentChange={setContent}
          onSave={(newContent) => setSavedContent(newContent)}
        />
        <div>
          <h2>Saved Content:</h2>
          <pre>{savedContent}</pre>
        </div>
      </main>
    </div>
  );
};

export default App;
