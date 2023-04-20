import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-plain_text';
import 'ace-builds/src-noconflict/theme-github';
import './Editor.css';
import PropTypes from 'prop-types';

const Editor = ({ fileContent, onContentChange }) => {
  const handleContentChange = (value) => {
    onContentChange(value);
  };

  return (
    <div className="editor-wrapper">
      <AceEditor
        mode="plain_text"
        theme="github"
        onChange={handleContentChange}
        value={fileContent}
        name="ace-editor"
        className="ace-editor"
        fontSize={14}
        showPrintMargin={false}
        showGutter
        highlightActiveLine
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>
  );
};

Editor.propTypes = {
  fileContent: PropTypes.string,
  onContentChange: PropTypes.func,
};

Editor.defaultProps = {
  fileContent: '',
  onContentChange: () => {},
};

export default Editor;
