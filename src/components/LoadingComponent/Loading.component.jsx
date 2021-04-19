import { ReactComponent as RollingSVG } from "../../assets/best-rolling.svg";

import "./Loading.styles.css";

const LoadingComponent = () => {
  return (
    <div className="loading-container">
      <RollingSVG className="loading-icon" />
    </div>
  );
};

export default LoadingComponent;
