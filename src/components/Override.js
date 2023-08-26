import { useState } from "react";

const Override = ({ tableData, index, setTableData }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(prevState => !prevState);
    setTableData(prevState => {
      // copy prevState obj
      let copiedData = JSON.parse(JSON.stringify(prevState));
      copiedData[index].override = !copiedData[index].override;
      return copiedData;
    });
  };
  return (
    <>
      <input
        type="checkbox"
        id="override"
        name="override"
        onChange={handleChange}
      />
      <label for="override">Override?</label>
    </>
  );
};

export default Override;
