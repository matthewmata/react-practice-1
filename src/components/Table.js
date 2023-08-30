import Override from "./Override";
import checkMarketSuspension from "../utils/checkMarketSuspension";

const Table = ({ tableData, setTableData }) => {
  if (tableData === null) return null;
  const headings = [
    "Player Name",
    "Player ID",
    "Team ID",
    "Team Nickname",
    "Team Abbr.",
    "Stat Type",
    "Stat Type ID",
    "Position",
    "Market Suspended",
    "Overide Suspension",
    "Line",
    "Low Line",
    "High Line",
  ];

  return (
    <table>
      <tr>
        {headings.map((heading, i) => (
          <th key={i}>{heading}</th>
        ))}
      </tr>
      {tableData.map(
        ({
          playerName,
          playerId,
          teamId,
          teamNickname,
          teamAbbr,
          statType,
          statTypeId,
          position,
          marketSuspended,
          line,
          override,
          index,
          ...data
        }) => (
          <tr key={index}>
            <td>{playerName}</td>
            <td>{playerId}</td>
            <td>{teamId}</td>
            <td>{teamNickname}</td>
            <td>{teamAbbr}</td>
            <td>{statType}</td>
            <td>{statTypeId}</td>
            <td>{position}</td>
            <td>
              {JSON.stringify(
                checkMarketSuspension(line, marketSuspended, override, data)
              )}
            </td>
            <td>
              <Override
                setTableData={setTableData}
                tableData={tableData}
                index={index}
              />
            </td>
            <td>{line}</td>
            <td>{data.lineData ? data.lineData.min : "n/a"}</td>
            <td>{data.lineData ? data.lineData.max : "n/a"}</td>
          </tr>
        )
      )}
    </table>
  );
};

export default Table;
