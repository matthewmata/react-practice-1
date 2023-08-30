import { useState, useEffect } from "react";

import Filter from "./components/Filter";
import Table from "./components/Table";

import MARKETDATA from "./data/props.json";
import LINEDATA from "./data/alternates.json";

import createTableData from "./utils/createTableData";

const App = () => {
  const [markets, setMarkets] = useState(MARKETDATA);
  const [lines, setLines] = useState(LINEDATA);
  const [tableData, setTableData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  
  useEffect(() => {
    const data = createTableData(markets, lines);
    setTableData(data);
    console.log(data);
  }, [createTableData]);

  return (
    <div>
      {/* <Filter tableData={tableData} setFilteredData={setFilteredData} /> */}
      <Table tableData={tableData} setTableData={setTableData} />
    </div>
  );
};

export default App;