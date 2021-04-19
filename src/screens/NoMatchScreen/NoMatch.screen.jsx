import ErrorComponent from "../../components/ErrorComponent/Error.component";

import "./NoMatch.styles.css";

const NotFoundScreen = () => {
  return (
    <div className="no-match-container">
      <ErrorComponent errorText="Wrong URL :'(" isHuge={true} />
    </div>
  );
};

export default NotFoundScreen;
