import MenuItem from './menu-item';

export default function MenuList({ menuList = [] }) {
  console.log('parameters: ', menuList);

  // // this is wrong, different parameters for base case and recursive cases
  // function recursiveMenu(menu) {
  //   if (menu && !menu.children)
  //     return menu.map((menuItem, index) => (
  //       <MenuItem key={index} item={menuItem.label} />
  //     ));
  //   else if (menu && menu.children) {
  //     return (
  //       menu.map((menuItem, index) => (
  //         <MenuItem key={index} item={menuItem.label} />
  //       )) + recursiveMenu(menu.children)
  //     );
  //   }
  // }

  function recursiveMenuList(menuList) {
    if (!menuList || !menuList.length) return null;

    //Okay!!!! I thought there is a 'return' inside of the map funciton, I didn't need to write another return
    // BUT!! Actually, the return in map is just works for map function, make sure the map funciton has something to return
    // BUT!! For the whole recursiveMenuList function, it still needs a return sentense to return value for the whole function!!
    return menuList.map((menu, index) => {
      console.log(`menu ${index}: `, menu);

      return (
        <div key={index}>
          <MenuItem item={menu} />
          {menu.children && (
            <div className="children">{recursiveMenuList(menu.children)}</div>
          )}
        </div>
      );
    });
  }

  function recursiveMenu(menu) {
    if (!menu || !menu.length) return null;

    return menu.map((menuItem, index) => (
      <div key={index}>
        <MenuItem item={menuItem} />
        {menuItem.children && (
          <div className="children">{recursiveMenu(menuItem.children)}</div>
        )}
      </div>
    ));
  }

  return (
    // <div className="menu-list">{menuList && recursiveMenuList(menuList)}</div>
    <div className="menu-list">{recursiveMenuList(menuList)}</div>
    // <div className="menu-list">{recursiveMenu(menuList)}</div>
  );
}
