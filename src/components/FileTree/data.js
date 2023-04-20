const fileTreeData = {
  name: 'Project',
  toggled: true,
  children: [
    {
      name: 'Folder1',
      children: [{ name: 'SubFolder1', children: { name: 'file1.txt' } }],
    },
    {
      name: 'Folder2',
      children: [{ name: 'file3.txt' }, { name: 'file4.txt' }],
    },
  ],
};

export default fileTreeData;
