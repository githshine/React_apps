import MenuList from './menu-list';

function TreeView({ menus = [] }) {
  return (
    <div className="tree-view-container">
      <MenuList menuList={menus} />
    </div>
  );
}

export default TreeView;
