import React, { useState } from 'react';
import { Treebeard } from 'react-treebeard';
import './FileTree.css';
import PropTypes from 'prop-types';

const FileTree = ({ data, onSelect }) => {
  const [treeData, setTreeData] = useState(data);

  const onToggle = (node, toggled) => {
    const updatedNode = {
      ...node,
      active: true,
      toggled: node.children ? toggled : node.toggled,
    };

    if (treeData.active) {
      treeData.active.active = false;
    }

    setTreeData({ ...treeData });
    onSelect(updatedNode);
  };

  return (
    <div className="file-tree-container">
      <Treebeard data={treeData} onToggle={onToggle} />
    </div>
  );
};

const nodePropType = {
  name: PropTypes.string.isRequired,
  children: PropTypes.array,
  toggled: PropTypes.bool,
  active: PropTypes.bool,
};

nodePropType.children = PropTypes.arrayOf(PropTypes.shape(nodePropType));

FileTree.propTypes = {
  data: PropTypes.shape(nodePropType).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default FileTree;
