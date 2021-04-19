import "./Error.styles.css";

const ErrorComponent = (props) => {
  const { errorText, isHuge } = props;

  return (
    <div className="error-container">
      {errorText && (
        <label className={`error-text ${isHuge ? "error-text-huge" : ""}`}>
          {errorText}
        </label>
      )}
    </div>
  );
};

export default ErrorComponent;
