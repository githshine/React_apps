function TreeView({ menus = [] }) {
  return (
    <div>
      <p>{menus.map((menu) => console.log(menu.label))}</p>
    </div>
  );
}

export default TreeView;
