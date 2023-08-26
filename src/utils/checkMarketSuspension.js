const checkMarketSuspension = (line, marketSuspended, override, data) => {
  // !data.lineData 
    // checks if that market has data in alts
  // !data.lineData.lines[line]
    // checks if the optimal line exists in alts
    // checks if none of the 3 probabilities for the optimal line are greater than 40%.
  // marketSuspended === 1
    // checks if market is initially suspended
  if (!data.lineData || !data.lineData.lines[line] || marketSuspended === 1) {
    // check if override is clicked
    if (override === true) {
      return false;
    }
    return true;
  } else {
    // check if override is clicked
    if (override === true) {
      return true;
    }
    return false;
  }
}

export default checkMarketSuspension;