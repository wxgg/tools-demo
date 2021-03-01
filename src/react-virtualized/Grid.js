import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {Grid} from 'react-virtualized';

import faker from 'faker';

// Grid data as an array of arrays
const list = [
    ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */],
    // And so on...
  ];
  
  function cellRenderer({columnIndex, key, rowIndex, style}) {
    return (
      <div key={key} style={style}>
        {list[rowIndex][columnIndex]}
      </div>
    );
  }
export default function Grid1() {
    let gridRef;
    const [ offsetWidth, setOffsetWidth ] = useState(100);
    const [ offsetHeight, setOffsetHeight ] = useState(100);
    useEffect(() => {
        let gridDOM = ReactDOM.findDOMNode(gridRef)
        setOffsetWidth(gridDOM.parentElement.clientWidth);
        setOffsetHeight(document.documentElement.clientHeight - 20);
    })
    return <Grid
            ref={(ref) => { gridRef = ref; }}
            cellRenderer={cellRenderer}
            height={offsetHeight}
            width={offsetWidth}
            columnWidth={100}
            rowHeight={50}
            columnCount={list[0].length}
            columnWidth={100}
            rowCount={list.length}
            width={300}
          />
}   