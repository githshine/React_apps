import { useState } from 'react';
import MenuList from './menu-list';
import { FaMinus, FaPlus } from 'react-icons/fa';

export default function MenuItem({ item = {} }) {
  const [showChildren, setShowChildren] = useState({});

  function handleClick(index) {
    console.log('click tree parent node, ' + index);
    setShowChildren((s) => {
      return { ...s, [index]: !s[index] };
    });
  }

  return (
    <li className="menu-item">
      <div
        onClick={() => handleClick(item.to)}
        style={{ display: 'flex', gap: '20px', alignItems: 'center' }}
      >
        {item && item.label && <p>{item.label}</p>}
        {item && item.children && item.children.length && (
          <span>
            {showChildren[item.to] ? (
              <FaMinus color="#fff" size="25px" />
            ) : (
              <FaPlus color="#fff" size="25px" />
            )}
          </span>
        )}
      </div>
      {console.log('showChildren obj: ', showChildren)}

      {showChildren[item.to] &&
        item &&
        item.children &&
        item.children.length && <MenuList menuList={item.children} />}
    </li>
  );
}
