import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Table, Column, Cell } from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.min.css'
import { DateCell, ImageCell, LinkCell, TextCell } from './Cells'
import FakeObjectDataListStore from './FakeObjectDataListStore';
const dataList = new FakeObjectDataListStore(100000);

export default function Grid() {
  let gridRef;
  const [offsetWidth, setOffsetWidth] = useState(100);
  const [offsetHeight, setOffsetHeight] = useState(100);
  useEffect(() => {
    let gridDOM = ReactDOM.findDOMNode(gridRef)
    setOffsetWidth(gridDOM.parentElement.clientWidth);
    setOffsetHeight(document.documentElement.clientHeight - 20);
  })
  return <Table
    ref={(ref) => { gridRef = ref; }}
    rowHeight={100}
    headerHeight={50}
    rowsCount={dataList.getSize()}
    height={offsetHeight}
    width={offsetWidth}
  >

    <Column
      columnKey="lastName"
      header={<Cell>Last Name</Cell>}
      cell={<TextCell data={dataList} />}
      fixed={true}
      width={100}
    />
    <Column
      columnKey="firstName"
      header={<Cell>First Name</Cell>}
      cell={<TextCell data={dataList} />}
      fixed={true}
      width={120}
    />
    <Column
      columnKey="lastName"
      header={<Cell>Last Name</Cell>}
      cell={<TextCell data={dataList} />}
      fixed={true}
      width={100}
    />
    <Column
      columnKey="city"
      header={<Cell>City</Cell>}
      cell={<TextCell data={dataList} />}
      width={100}
    />
    <Column
      columnKey="street"
      header={<Cell>Street</Cell>}
      cell={<TextCell data={dataList} />}
      width={200}
    />
    <Column
      columnKey="zipCode"
      header={<Cell>Zip Code</Cell>}
      cell={<TextCell data={dataList} />}
      width={200}
    />
    <Column
      columnKey="email"
      header={<Cell>Email</Cell>}
      cell={<TextCell data={dataList} />}
      width={200}
    />
    <Column
      columnKey="date"
      header={<Cell>DOB</Cell>}
      cell={<DateCell data={dataList} />}
      width={200}
    />
    <Column
      columnKey="zipCode"
      header={<Cell>Zip Code</Cell>}
      cell={<TextCell data={dataList} />}
      width={200}
    />
    <Column
      columnKey="email"
      header={<Cell>Email</Cell>}
      cell={<TextCell data={dataList} />}
      width={200}
    />
    <Column
      columnKey="date"
      header={<Cell>DOB</Cell>}
      cell={<DateCell data={dataList} />}
      width={200}
    />
    <Column
      columnKey="zipCode"
      header={<Cell>Zip Code</Cell>}
      cell={<TextCell data={dataList} />}
      width={200}
    />
    <Column
      columnKey="email"
      header={<Cell>Email</Cell>}
      cell={<TextCell data={dataList} />}
      width={200}
    />
    <Column
      columnKey="date"
      header={<Cell>DOB</Cell>}
      cell={<DateCell data={dataList} />}
      width={200}
    />
    <Column
      columnKey="zipCode"
      header={<Cell>Zip Code</Cell>}
      cell={<TextCell data={dataList} />}
      width={200}
    />
    <Column
      columnKey="email"
      header={<Cell>Email</Cell>}
      cell={<TextCell data={dataList} />}
      width={200}
    />
    <Column
      columnKey="date"
      header={<Cell>DOB</Cell>}
      cell={<DateCell data={dataList} />}
      width={200}
    />
    <Column
      columnKey="zipCode"
      header={<Cell>Zip Code</Cell>}
      cell={<TextCell data={dataList} />}
      width={200}
    />
    <Column
      columnKey="email"
      header={<Cell>Email</Cell>}
      cell={<TextCell data={dataList} />}
      width={200}
    />
    <Column
      columnKey="date"
      header={<Cell>DOB</Cell>}
      cell={<DateCell data={dataList} />}
      width={200}
    />
  </Table>
}   