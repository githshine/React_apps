export default function MenuItem({ item = {} }) {
  return <div className="menu-item">{item && <p>{item.label}</p>}</div>;
}
