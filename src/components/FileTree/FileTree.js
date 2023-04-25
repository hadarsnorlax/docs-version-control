import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFile,
  faFolderPlus,
  faMinusSquare,
} from '@fortawesome/free-solid-svg-icons';
import { Treebeard } from 'react-treebeard';
import './FileTree.css';
import PropTypes from 'prop-types';

const FileTree = ({ data, onSelect }) => {
  const [treeData, setTreeData] = useState(data);

  const onToggle = (node, toggled) => {
    const updateNodesRecursively = (nodes) => {
      return nodes.map((childNode) => {
        if (childNode === node) {
          return {
            ...childNode,
            active: true,
            toggled: childNode.children ? toggled : childNode.toggled,
          };
        }
        return {
          ...childNode,
          active: false,
          children: childNode.children
            ? updateNodesRecursively(childNode.children)
            : childNode.children,
        };
      });
    };

    const updatedTreeData = {
      ...treeData,
      children: updateNodesRecursively(treeData.children),
    };

    setTreeData(updatedTreeData);
    onSelect(node);
  };
  return (
    <div className="file-tree-container">
      <div className="file-tree-actions">
        <button type="button" onClick={() => console.log('Create file')}>
          <FontAwesomeIcon icon={faFile} />
        </button>
        <button type="button" onClick={() => console.log('Create folder')}>
          <FontAwesomeIcon icon={faFolderPlus} />
        </button>
        <button
          type="button"
          onClick={() => console.log('Minimize folder view')}
        >
          <FontAwesomeIcon icon={faMinusSquare} />
        </button>
      </div>
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
