import { useState, useEffect } from "react";

import LabelInputComponent from "../../components/LabelInputComponent/LabelInput.component";
import ButtonComponent from "../../components/ButtonComponent/Button.component";

import useQuery from "../../hooks/useQuery";

import "./Copy.styles.css";

const queryName = "q";
const copyText = "Copy";
const copiedText = "Copied";

const CopyScreen = () => {
  const [copyLabel, setCopyLabel] = useState(copyText);
  const query = useQuery();
  const queryValue = query.get(queryName);

  const handleCopy = () => {
    navigator.clipboard.writeText(queryValue);
    setCopyLabel(copiedText);
  };

  useEffect(() => {
    document.addEventListener("copy", () => setCopyLabel(copiedText));
  }, []);

  return (
    <div className="copy-container">
      <div className="copy-input-wrapper">
        <LabelInputComponent
          inputType="text"
          label="Copy Passed Parameter"
          value={queryValue || ""}
          isAutoFocus={true}
          isCopy={true}
        />
        <ButtonComponent buttonText={copyLabel} handleClick={handleCopy} />
      </div>
    </div>
  );
};

export default CopyScreen;
