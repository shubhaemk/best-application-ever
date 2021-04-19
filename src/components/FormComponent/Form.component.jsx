import ButtonComponent from "../ButtonComponent/Button.component";
import ErrorComponent from "../ErrorComponent/Error.component";
import LabelInputComponent from "../LabelInputComponent/LabelInput.component";
import "./Form.styles.css";

/**
 * Not reusable but can be made if we create an array of object with input type, value, onChange function
 */

const FormComponent = (props) => {
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    pageSize,
    setPageSize,
    pageCount,
    setPageCount,
    handleSubmit,
    inputError,
  } = props;

  const handleSubmitLocal = (event) => {
    event.preventDefault();
    handleSubmit();
  };

  return (
    <form className="form-component-container" onSubmit={handleSubmitLocal}>
      <div className="form-input-container-wrapper">
        <LabelInputComponent
          inputType={"date"}
          value={startDate}
          setValue={setStartDate}
          label="Start Date"
        />
      </div>
      <div className="form-input-container-wrapper">
        <LabelInputComponent
          inputType={"date"}
          value={endDate}
          setValue={setEndDate}
          label="End Date"
        />
      </div>
      <div className="form-input-container-wrapper">
        <LabelInputComponent
          inputType={"text"}
          value={pageSize}
          setValue={setPageSize}
          label="Page Size"
        />
      </div>
      <div className="form-input-container-wrapper">
        <LabelInputComponent
          inputType={"text"}
          value={pageCount}
          setValue={setPageCount}
          label="Page Count"
        />
      </div>
      <div className="form-error-container-wrapper">
        <ErrorComponent errorText={inputError} />
      </div>
      <ButtonComponent handleClick={handleSubmitLocal} buttonText={"Search"} />
    </form>
  );
};

export default FormComponent;
