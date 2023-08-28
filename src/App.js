// import "./styles.css";
// import Chart from "./chart";
// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <Chart />
//     </div>
//   );
// }
// //

import React, { useState } from "react";
import ReactDOM from "react-dom";
import Table from "./Table"; // Adjust the path
import SortableColumns from "./SortableColumns"; // Adjust the path
import SortOrderSelect from "./SortOrderSelect"; // Adjust the path
import { DragDropContext } from "react-beautiful-dnd"; // Adjust the path

const dataList = [
  // ... your data objects here
];

const columnHeaders = {
  key: true,
  purchasedate: true,
  purchaseAmount: true,
  createdBy: true,
  addressState: true,
  lastUpdatedDate: true
};

const App = () => {
  const [visibleColumns, setVisibleColumns] = useState(columnHeaders);
  const [sortOrder, setSortOrder] = useState("ascending");
  const [sortableColumns, setSortableColumns] = useState(
    Object.keys(visibleColumns)
  );
  const [sortOrderIndexList, setSortOrderIndexList] = useState(
    sortableColumns.map((_, index) => index)
  );

  const handleColumnToggle = (columnName, checked) => {
    setVisibleColumns((prevColumns) => ({
      ...prevColumns,
      [columnName]: checked
    }));
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedIndexes = Array.from(sortOrderIndexList);
    const [reorderedIndex] = reorderedIndexes.splice(result.source.index, 1);
    reorderedIndexes.splice(result.destination.index, 0, reorderedIndex);

    setSortOrderIndexList(reorderedIndexes);
  };

  const handleApplySortOrder = (newSortOrder) => {
    // Update the sorting order
    setSortOrder(newSortOrder);
  };

  return (
    <div>
      <h2>Sortable Columns</h2>
      <SortableColumns
        visibleColumns={visibleColumns}
        onReorder={handleOnDragEnd}
      />
      <h2>Sort Order</h2>
      <SortOrderSelect sortOrder={sortOrder} onChange={handleSortOrderChange} />
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <SortableColumnOrderList
          visibleColumns={visibleColumns}
          sortOrderIndexList={sortOrderIndexList}
        />
      </DragDropContext>
      <button onClick={() => handleApplySortOrder(sortableColumns)}>
        Apply Sort Order
      </button>
      <Table
        dataList={dataList}
        visibleColumns={visibleColumns}
        sortOrder={sortOrder}
      />
    </div>
  );
};

// ReactDOM.render(<App />, document.getElementById('root'));

/**
 *
 * 2 charts under 10 lbs and over 10lbs
 *
 * metacom dosing charts
 *
 *
 * .1mg/kg orallly for 2 weeks
 *
 * small dogs .5mg/ml size
 *
 *
 * large dogs 1.5 mg/ml size
 *
 * include total amount to be dispensed (2 weeks worth)
 *
 */
