import { useRef, useEffect } from "react";

import "./LabelInput.styles.css";

const LabelInputComponent = (props) => {
  const { inputType, label, value, setValue, isAutoFocus, isCopy } = props;

  const InputRef = useRef();

  const setValueLocal = (event) => {
    setValue && setValue(event.target.value);
  };

  useEffect(() => {
    if (isCopy) {
      InputRef.current.select();
    }
  }, [isCopy]);

  return (
    <div className="label-input-container">
      <label htmlFor={label} className="label-input-title">
        {label}
      </label>
      <input
        id={label}
        ref={InputRef}
        type={inputType}
        placeholder={inputType === "date" ? "yyyy-mm-dd" : ""}
        value={value}
        onChange={setValueLocal}
        className="label-input-value"
        autoFocus={isAutoFocus}
      />
    </div>
  );
};

export default LabelInputComponent;
