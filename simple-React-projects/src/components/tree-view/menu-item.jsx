export default function MenuItem({ item = {}, onClick }) {
  return (
    <li className="menu-item" onClick={onClick}>
      {item && <span>{item.label}</span>}
    </li>
  );
}
