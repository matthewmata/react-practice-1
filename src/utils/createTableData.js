const createTableData = (markets, lines) => {
  const linesSortedByPlayerId = {};
  // refactoring alternates to get linear search type
  lines.forEach(
    ({ playerId, statTypeId, line, underOdds, overOdds, pushOdds }) => {
      // if the player doesnt exist
      if (!linesSortedByPlayerId[playerId]) {
        linesSortedByPlayerId[playerId] = {};
      }
      // if statTypeId does not exist for that player
      if (linesSortedByPlayerId[playerId][statTypeId] === undefined) {
        linesSortedByPlayerId[playerId][statTypeId] = {
          min: line,
          max: line,
          lines: {
            [line]: Math.max(underOdds, overOdds, pushOdds) > 0.4,
          },
        };
      }
      // if statTypeId exists
      else {
        let lineData = linesSortedByPlayerId[playerId][statTypeId];
        // check if new min
        let currMin = lineData.min;
        lineData.min = Math.min(currMin, line);
        // check if new max
        let currMax = lineData.max;
        lineData.min = Math.max(currMax, line);
        // check if line is suspended
        lineData.lines[line] = Math.max(underOdds, overOdds, pushOdds) > 0.4;
      }
    }
  );
  markets.forEach((market) => {
    // adds lineData to props obj
    let lineData = linesSortedByPlayerId[market.playerId][market.statTypeId];
    market.lineData = lineData;
    // adds an override property
    market.override = false;
  });

  return markets;
};

export default createTableData;
