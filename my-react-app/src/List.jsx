import PropTypes from "prop-types";

function List(props) {
 

  // fruits.sort((a,b) => a.calories - b.calories); // add mode
  // fruits.sort((a,b) => b.calories - a.calories); // 递减 mode -- descending 

  // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
  const itemList = props.items;
  const listItems = itemList.map(
                                    item => 
                                          <li key={item.id}>
                                            {item.name}: <b>{item.calories}</b>
                                          </li>)


  return (
    <div>
      <h3 className="list-category">{props.category}:</h3>
      <ol className="list-items">
        {listItems}
      </ol>
    </div>)
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                              name: PropTypes.string,
                                              calories: PropTypes.number})),
  category: PropTypes.string
}

List.defaultProps = {
  items: [],
  category: "Category",
}

export default List;