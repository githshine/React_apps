import React, { useState, useEffect } from 'react';

// Problem
// You are given a published Google Doc like this one that contains a list of Unicode characters and their positions in a 2D grid. Your task is to write a function that takes in the URL for such a Google Doc as an argument, retrieves and parses the data in the document, and prints the grid of characters. When printed in a fixed-width font, the characters in the grid will form a graphic showing a sequence of uppercase letters, which is the secret message.

// The document specifies the Unicode characters in the grid, along with the x- and y-coordinates of each character.

// The minimum possible value of these coordinates is 0. There is no maximum possible value, so the grid can be arbitrarily large.

// Any positions in the grid that do not have a specified character should be filled with a space character.

// You can assume the document will always have the same format as the example document linked above.

// For example, the simplified example document linked above draws out the letter 'F':

// To verify that your code works, please run your function with this URL (updated 8/1/25) as its argument:
// https://docs.google.com/document/d/e/2PACX-1vTMOmshQe8YvaRXi6gEPKKlsC6UpFJSMAk4mQjLm_u1gmHdVVTaeh7nBNFBRlui0sTZ-snGwZM4DBCT/pub

// https://docs.google.com/document/d/e/2PACX-1vRPzbNQcx5UriHSbZ-9vmsTow_R6RRe7eyAU60xIF9Dlz-vaHiHNO2TKgDi7jy4ZpTpNqM7EvEcfr_p/pub

const GridLetter = () => {
  const [url, setUrl] = useState('');
  const [tableContent, setTableContent] = useState([]);

  useEffect(() => {
    async function fetchGoogleDoc(url) {
      const res = await fetch(url);
      const html = await res.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const tables = doc.querySelectorAll('table');

      const letCoordinates = [];

      tables.forEach((table) => {
        const rows = table.querySelectorAll('tr');
        rows.forEach((row) => {
          const cells = row.querySelectorAll('td');
          const rowData = Array.from(cells).map((cell) =>
            cell.textContent.trim()
          );
          letCoordinates.push(rowData);
        });
      });

      console.log('letCoordinates:', letCoordinates);
      return letCoordinates.slice(1);
    }

    async function loadData() {
      const result = await fetchGoogleDoc(url);
      setTableContent(result);
    }

    if (!url || typeof url !== 'string' || url.trim() === '') {
      console.log('Invalid or Empty URL. Skipping fetch.');
      setTableContent([]);
      return;
    } else {
      loadData();
    }
  }, [url]);

  function handleInputChange(event) {
    setUrl(event.target.value);
    console.log(event.target.value);
  }

  function renderLetters() {
    console.log('TableContent:', tableContent);

    const data = tableContent;
    console.log('data:', data);

    const maxX = Math.max(...data.map((d) => d[0]));
    const maxY = Math.max(...data.map((d) => d[2]));

    const grid = Array.from({ length: maxY + 1 }, () =>
      Array.from({ length: maxX + 1 }, () => ' ')
    );

    data.forEach(([x, char, y]) => {
      grid[y][x] = char;
    });

    // Flip the Grid Vertically
    return (
      <pre>
        {grid
          .slice()
          .reverse()
          .map((row) => row.join(' '))
          .join('\n')}
      </pre>
    );
  }

  return (
    <div>
      <input id="url" onChange={handleInputChange}></input>
      <div style={{ display: 'block', margin: '20px' }}>
        <div style={{ display: 'block', margin: '20px' }}>
          {renderLetters()}
        </div>
      </div>
    </div>
  );
};

export default GridLetter;
