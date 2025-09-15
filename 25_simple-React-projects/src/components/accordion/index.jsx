import { useState } from 'react';
import data from './data';
import './styles_2.css';

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [selectedArr, setSelectedArr] = useState([]);
  const [enableMultiSel, setEnableMultiSel] = useState(false);

  function handelClickItem(itemId) {
    !enableMultiSel
      ? setSelected(selected === itemId ? null : itemId)
      : setSelectedArr(
          selectedArr.includes(itemId)
            ? selectedArr.filter((id) => id !== itemId)
            : selectedArr.concat(itemId)
        );
  }

  function handleClickBtn() {
    // enableMulti --> disEnable, eg. multi selection --> single selection
    if (enableMultiSel) {
      setSelected(selectedArr.pop());
      setSelectedArr([]); // clear multi selection data
    } else {
      setSelectedArr((s) => s.concat(selected));
      setSelected(null);
    }

    setEnableMultiSel((e) => !e);
  }

  return (
    <div className="wrapper">
      <button
        onClick={handleClickBtn}
        style={{ backgroundColor: !enableMultiSel ? '#614101' : '#943b0e' }}
      >
        {!enableMultiSel
          ? ' Enable Multi Selection'
          : 'Disable Multi Selection'}
      </button>
      <div className="accordion">
        {data && data.length > 0
          ? data.map((item, id) => (
              <div className="accordion-item" key={id}>
                <div className="title" onClick={() => handelClickItem(id)}>
                  <h3>{item.question}</h3>
                  <span>+</span>
                </div>
                {/* {selected === id && ( */}
                {(selected === id || selectedArr.includes(id)) && (
                  <div className="content">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))
          : 'No data element.'}
      </div>
    </div>
  );
}

export default Accordion;
