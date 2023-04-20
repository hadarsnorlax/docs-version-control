import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-plain_text';
import 'ace-builds/src-noconflict/theme-monokai';

const Editor = ({ fileContent, onContentChange, onSave }) => {
  const [content, setContent] = useState(fileContent || '');

  useEffect(() => {
    setContent(fileContent);
  }, [fileContent]);

  const handleSave = () => {
    onSave(content);
  };

  return (
    <div className="editor-container">
      <AceEditor
        mode="plain_text"
        theme="monokai"
        name="editor"
        value={content}
        onChange={onContentChange || setContent}
        fontSize={14}
        showPrintMargin={false}
        showGutter
        highlightActiveLine
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
      <button type="button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

Editor.propTypes = {
  fileContent: PropTypes.string,
  onContentChange: PropTypes.func,
  onSave: PropTypes.func.isRequired,
};

Editor.defaultProps = {
  fileContent: '',
  onContentChange: () => {},
};

export default Editor;
