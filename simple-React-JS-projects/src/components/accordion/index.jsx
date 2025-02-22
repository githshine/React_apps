import { useState } from 'react';
import data from './data';
import './styles_2.css';

function Accordion() {
  const [selected, setSelected] = useState(null);

  function handelClickItem(itemId) {
    setSelected(selected === itemId ? null : itemId);
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0
          ? data.map((item, id) => (
              <div className="accordion-item" key={id}>
                <div className="title" onClick={() => handelClickItem(id)}>
                  <h3>{item.question}</h3>
                  <span>+</span>
                </div>
                {selected === id && (
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
