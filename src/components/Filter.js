import { useState } from "react";

const Filter = ({ tableData, setFilteredData, options }) => {
  const [filter, setFilter] = useState('all');

  return (
    <>
      <label htmlFor="filter">Filter By:</label>

      <select name="filter" id="filter">
        <option value="all" defaultValue>
          Show All
        </option>
        <option value="position">Position</option>
        <option value="stat-type">Stat Type</option>
        <option value="market-status-t">Market Suspended</option>
        <option value="market-status-f">Market Open</option>
      </select>
    </>
  );
};

export default Filter;
